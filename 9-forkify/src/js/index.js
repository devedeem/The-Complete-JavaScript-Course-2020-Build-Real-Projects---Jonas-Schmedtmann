import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import *  as searchView from './views/searchView';
import *  as recipeView from './views/recipeView';
import *  as listView from './views/listView';
import * as likesView from './views/likesView';
import { elements, renderLoader, clearLoader} from './views/base';

/** Global state of the app
 * - Search Object
 * - Current recie object
 * - Shopping list object
 * - Liked recipes
*/
const state = {};

// window.state = state;

/**
 * Search Controller
 */
const controlSearch = async () => {
    // 1) Get a query from the view
    const query = searchView.getInput(); //ToDo
    // const query = 'pizza'; //ToDo

    // console.log(query);
    if(query) {
        // 2) New search object and add to state
        state.search = new Search(query);
    
        // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

       try{
            // 4) Search for recipes
        await state.search.getResult();

        // 5) Render results on UI
        clearLoader();     
        // console.log(state.search.result);
        searchView.renderResults(state.search.result); 
       } catch(err){
           alert('Something went wrong!');
       }
    }
};


elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

// window.addEventListener('load', e => {
//     e.preventDefault();
//     controlSearch();
// });

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    // console.log(btn);
    if(btn){
        const gotoPage = parseInt( btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, gotoPage); 
        console.log(gotoPage);
    }
});



/**
 * Recipe Controller
 */

 const controlRecipe = async() => {
    // Get the id from url 
    const id = window.location.hash.replace('#', '');
    
    //  console.log(id);

     if(id){
        // Prepare UI for changes
        recipeView.clearRecipe(); 
        renderLoader(elements.recipe);
        
        //Highlight selected search item
        if (state.search){
        searchView.highlightedSelected(id);

        }

        // Create new recipe Object
        state.recipe = new Recipe(id);
        

        //TESTING
        // window.r = state.recipe;

       try{
            // Get recipe Data
        await state.recipe.getRecipe();
        // console.log(state.recipe.ingredients);
        state.recipe.parseIngredients();

        // Calculate Servings and time
        state.recipe.calcTime();
        state.recipe.calcServings();

        // Render recipe
        clearLoader();
        recipeView.renderRecipe(
            state.recipe,
            state.likes.isLiked(id) 
            );
        
       } catch(err){
           alert('Error processing recipe!');
       }
     }
 }

// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('load', controlRecipe);
 
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));




/**
 *  LIST CONTROLER
 */
const controlList = () => {
    // Create a new list IF there is none yet
    if(!state.list) state.list = new List();

    // Add each ingredient to the list and UI
    state.recipe.ingredients.forEach(el => {
        const item = state.list.addItem(el.count, el.unit, el.ingredient);
        listView.renederItem(item);
    });
};

// Handle delete and Update list item events
elements.shopping.addEventListener('click', e => {

    const id = e.target.closest('.shopping__item').dataset.itemid;
    
    // Handle the delete button
    if(e.target.matches('.shopping__delete, .shopping__delete *')){
        //Delete from state
        state.list.deleteItem(id);

        // Delete from UI
        listView.deleteItem(id);

        // Handle the count update
    } else if (e.target.matches('.shopping__count-value')){
        const val = parseFloat(e.target.value, 10);
        state.list.updateCount(id, val);
    }
});

/**
 * LIKE CONTROLLER
 */
// Testing

const controlLike = () => {
    if(!state.likes) state.likes = new Likes();

    const currentID = state.recipe.id;
    // User has not yet liked current recipe
    if(!state.likes.isLiked(currentID)){
        // Add lilke to the state
        const newLike = state.likes.addLike(
            currentID,
            state.recipe.title,
            state.recipe.author,
            state.recipe.img
        );

        // Toggle the like button
        likesView.toggleLikeBtn(true);

        // Add like to UI list
        likesView.renderLike(newLike);
        
    // User HAS liked the current recipe
    } else {
        // REmove like from the state
        state.likes.deleteLike(currentID);
        // Toggle the like button
        likesView.toggleLikeBtn(false);

        // Remove like from UI list
        likesView.deleteLike(currentID);
    }
    likesView.toggleLikeMenu(state.likes.getNumLikes());

};

// Restore liked recipe on page load
window.addEventListener('load', () => {
    state.likes = new Likes();
    
    // Restore likse
    state.likes.readStorage();

    // Toggle like menu button
    likesView.toggleLikeMenu(state.likes.getNumLikes());

    // Render the existing likes
    state.likes.likes.forEach(like => likesView.renderLike(like));
});


// Handling recipe button clicks
elements.recipe.addEventListener('click', e => {
    if(e.target.matches('.btn-decrease, .btn-decrease *')){
        // Decrease button is clicked
        if(state.recipe.servings > 1){
            state.recipe.updateServings('dec');
            recipeDView.updateServingsIngredients(state.recipe);
        }

    } else if (e.target.matches('.btn-increase, .btn-increase *')){
        // Increase button is clicked
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe);


    } else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
        controlList();
    } else if(e.target.matches('.recipe__love, .recipe__love *')) {
        // Like constroller
        controlLike();
    }

    // console.log(state.recipe);
});



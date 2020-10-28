# angularWorkshop
This project was generated with Angular CLI version 10.2.0.
## Development server
Run ng serve for a dev server. Navigate to [link](http://localhost:4200/). The app will automatically reload if you change any of the source files.
## Code scaffolding
Run ng generate component component-name to generate a new component. You can also use ng generate directive|pipe|service|class|guard|interface|enum|module.

## Build
Run ng build to build the project. The build artifacts will be stored in the dist/ directory. Use the --prod flag for a production build.

## Running unit tests
Run ng test to execute the unit tests via Karma.

## Running end-to-end tests
Run ng e2e to execute the end-to-end tests via Protractor.

## Further help
To get more help on the Angular CLI use ng help or go check out the Angular CLI README.

# RecipesAndShoppingListProject

### build a recipe book and shopping list app
we're going to have two sections, shopping list and recipe book and we will be able to manage our recipes,
view them in detail and also to manage our shopping list and even push ingredients from a recipe directly to the shopping list.

# Planning App
 ![alt text](https://github.com/ahmedBou/angularWorkshop/blob/main/recipes-and-shopping-list-project/src/app/planning%20app.png)
 
The first step in creating an Angular application of course is to lay out the structure of this app and especially plan which components you're probably going to need.
because it's normal that whilst building the app, we decide to add another component which you didn't plan to add at the beginning or maybe you decide that you can merge two components you thought you would have to split. 

1. **so let's start with the features of this app.**
Well, we're going to have a shopping list and a recipe book section, managing either our single ingredients we need to buy, or in the recipe book,our whole recipes.
A root component holding our overall application,the app component, every Angular app has this. Then since we have two sections, it probably makes sense to have some kind of header component where we can navigate between these two sections.

### Header
Of course we could also hardcode the headers simply into the app component but since it will contain its own business logic, in the end it will trigger a routing action later and we will also add a dropdown there in the end which allows us to store our recipes on the server and fetch them from there.
So since we will have that logic attached to the header, outsourcing it into its own component makes sense so that we don't have to put all the logic into our root component which really mainly should only be responsible for holding our overall app. So that is the header,

### Features

**Shopping List**
let's dive into the individual features, let's start with the shopping list. Here I guess it makes sense to have the overall shopping-list component,
remember the blue box is only the feature so we need a component holding our shopping list and maybe in this shopping-list component, we also want to have a shopping list edit part which allows us to add new items, so an input field and a button because that again has its own logic, we will have to decide if we are editing an existing item or adding a new one, we need to submit this, so it makes sense to create its own component for this. So if we have an overall list component, mainly holding the data of the list and the edit component being responsible for managing this data, though the edit component will be nested inside the list component.
I guess that's it for the shopping list, let's have a look at the recipe book.

**Recipe Book**
it certainly makes sense to have, again just like with the shopping list, a recipe-list component which shows us a list of all our recipes. 
Here we might later also put each individual recipe into its own item though since it holds a little bit more information than just one line of HTML code and a recipe-detail area would be great too.So an area where once we select a recipe, we can see informations about that. Later, we will also add another component here because we will then somehow need a component which allows us to edit existing recipes or add new ones but since this is really advanced now, I will omit it for now and focus on the displaying part. So a list with items and then the details section which displays the details for the currently selected item. I guess this looks like a good plan, each of these components should hold a significant amount of business logic and I guess with the component , we're really having each component focus on one main topic, displaying a list, displaying information about a single item, displaying detail information about a selected item and so on. 
So this is generally how I approach this, for example recipe-list in a single item but this will become more clear once we actually implement these components.
Now one last thing we should think about, which models will be use in this app? And with model, I simply mean which data.

**Ingredient : Data**
So we certainly will need some representation for our ingredient.
We will use ingredients a lot in the recipe book too, each recipe there has a couple of ingredients, so we should define how the ingredient looks like. 
That is something which our application probably also needs, be clear about the data we're going to use and put it into its own class, so that we have our own type we can use later on and that we have a clear interface or definition of what your data looks like so that we can easily have our components talk with each other.

**Recipe**
So besides the ingredients which probably is a very simple model, only controlling the name and amount maybe, we also will need a model for the recipe which contains things like title, the description, the ingredients.

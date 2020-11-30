

create table ingredients (
id int primary key,
name varchar(200),
image varchar(max),
calories int 
)


create table recipes (
id int primary key,
name varchar(200),
image varchar(max),
cookingMethod varchar(max),
time int
)




create table ingredientsInRecipes (
recipeId int  ,
ingredientId int,
FOREIGN KEY (recipeId) REFERENCES recipes(id),
FOREIGN KEY (ingredientId) REFERENCES ingredients(id),
PRIMARY KEY (recipeId,ingredientId)
)

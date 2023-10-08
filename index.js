const API_KEY= "ba6b94af0f424f30a83271fbdec67af3"
const recipeList=document.querySelectorAll('.inner')


function displayRecipes(recipes){
  recipeList.innerHTML=''
}

const getRecipes=async()=>{
  const response= await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}
  `)
  const data=await response.json()
  return data.recipes
}



const init=async()=>{
  const recipes=await getRecipes()

  displayRecipes(recipes)

  // console.log(recipes)
}

init()
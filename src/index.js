const apiUrl = 'http://localhost:3000'

async function fetchData(){
  try{
    const response = await fetch apiUrl data()
    const data = await response.json

    console.log(data)
  }catch(error){
    console.error('Error in fetching data:', error)
  }
}

async function postData(data){
  try{
    const response = await fetch(`${apiURL}/data`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      }.
        body: JSON.stringify(data)
    });
    const responseData = await response.json

    console.log(responseData)
  }catch (error) {
    console.error('Error in posting data:', error);
  }
}

const URL_API='https://api.thetvdb.com/login';
const URLbuscar='https://api.thetvdb.com/search/series?name=game';
const BASE_API = 'https://yts.am/api/v2/';


class Api {
  async ObtenerToken() {
const query=await 
   fetch(URL_API,{
           method: 'POST',
           headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
           body: JSON.stringify({
  apikey:"PPDZ39EGKOEHNR3R",userkey:"JOEZYXMFGR0RDBXA",username:"tavromero2yu"
           })
           });
		   const data=await query.json();
		   console.log(data.token)
			return data.token
		   

 // const query = await fetch(`${BASE_API}list_movies.json?`);
 //    const { data } = await query.json();
 //    return data.movies

}
	async ListaSerie(token,name){
		//token='eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTg2NjI3MDYsImlkIjoiRGVtbyBQcm9qZWN0Iiwib3JpZ19pYXQiOjE1NTg1NzYzMDYsInVzZXJpZCI6NTIwMjgwLCJ1c2VybmFtZSI6InRhdnJvbWVybzJ5dSJ9.wBBulRw6veys7Z3mbGjGXtLBNBSIDZ--OgYuG6TKEa4Mn9mjXvBcGqpklL0RbmLbJ0IFtsY2cjQQEZKZTLyFs_AFACgpXitAetXdkRhgh88REUeAM4rcDCO0wRKPE74pw6ikuIlCL5q-pBej8PvkwP8XhkT2fHgMjycroKkpMGoUIUilIdLF0kgzMr-N257Xf7_RowcSBzyM1fjHObbt_YI1Sq8DRegi_xatsvBnuytuOVMtYcvsBXrDWUqEOI_C6VaHrrPYAwHukoHlPFlnYbOkTfvrIXSZYI0GimBtawDl60TBZ5_zbL-PqtlpwDR8CFke_XQkeCrxfNsTZWFSXQ';
		url='https://api.thetvdb.com/search/series?name='.concat(name);
		const query=await 
		   fetch(url,{
		           method: 'GET',
		           headers: {      		
		Authorization: "Bearer ".concat(token)  
		}});
		   const data=await query.json();
			// console.log(data.data[2].seriesName)
			// const datas=data.data.map((item)=>item.seriesName)
			// console.log(datas)
			console.log(data)
			return data.data
		//.then(response => response.json())
		//   .then(data=>{
		//   	for(var i=0;data.data.length;i++){
		//   		 console.log("datas ",data.data[i].seriesName)
		//   		// console.log("datas ",data.data[i].banner)
		//   	}
  // })
  // .catch(err=>console.log(err))


	}
	async serieDetalles(token,id){
		//token='eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTg2NjI3MDYsImlkIjoiRGVtbyBQcm9qZWN0Iiwib3JpZ19pYXQiOjE1NTg1NzYzMDYsInVzZXJpZCI6NTIwMjgwLCJ1c2VybmFtZSI6InRhdnJvbWVybzJ5dSJ9.wBBulRw6veys7Z3mbGjGXtLBNBSIDZ--OgYuG6TKEa4Mn9mjXvBcGqpklL0RbmLbJ0IFtsY2cjQQEZKZTLyFs_AFACgpXitAetXdkRhgh88REUeAM4rcDCO0wRKPE74pw6ikuIlCL5q-pBej8PvkwP8XhkT2fHgMjycroKkpMGoUIUilIdLF0kgzMr-N257Xf7_RowcSBzyM1fjHObbt_YI1Sq8DRegi_xatsvBnuytuOVMtYcvsBXrDWUqEOI_C6VaHrrPYAwHukoHlPFlnYbOkTfvrIXSZYI0GimBtawDl60TBZ5_zbL-PqtlpwDR8CFke_XQkeCrxfNsTZWFSXQ';
		url='https://api.thetvdb.com/series/'.concat(id);
		const query=await 
		   fetch(url,{
		           method: 'GET',
		           headers: {      		
		Authorization: "Bearer ".concat(token)  
		}});
		   const data=await query.json();
			return data.data
	}

	async serieDetalles2(imbdid){
		// url=´https://api.thetvdb.com/?i=´${imbdid}´&apikey=2f1f55d7&plot=full´;
		const uno='https://omdbapi.com/?i='
		const tres='&apikey=2f1f55d7&plot=full'
		url=`${uno}${imbdid}${tres}`
		const query=await 
		   fetch(url,{
		           method: 'GET',
		       });
		   const data=await query.json();
		   console.log("datos serieDetalles2",data)
			return data
	}
	async capitulosTemporada(token,id,temporada){
		// https://{{endpoint}}/series/:id/episodes/query?airedSeason=1;
		const uno='https://api.thetvdb.com/series/'
		const tres='/episodes/query?airedSeason='
		url=`${uno}${id}${tres}${temporada}`
		const query=await 
		   fetch(url,{
		           method: 'GET',
		            headers: {      		
		Authorization: "Bearer ".concat(token)  
		}});
		   const data=await query.json();
		   console.log("datos de episodios",data.data)
			return data.data
	}

		async ListaActores(token,id){
		// https://{{endpoint}}/series/:id/actors
		const uno='https://api.thetvdb.com/series/'
		const tres='/actors'
		url=`${uno}${id}${tres}`
		const query=await 
		   fetch(url,{
		           method: 'GET',
		            headers: {      		
		Authorization: "Bearer ".concat(token)  
		}});
		   const data=await query.json();
		   console.log("Lista de Actores",data.data)
			return data.data
	}



}
export default new Api();

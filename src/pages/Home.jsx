import React from "react";
const Home = () => {
  // const GetMeal = async () => {
  //   let res = await fetch(
  //     "https://themealdb.com/api/json/v1/1/search.php?s=Arrabiata",
  //     {
  //       method: "GET",
  //     }
  //   );

  //   let mealData = await res.text();
  //   console.log(mealData);
  // };

  return (
    <div className="home">
      <div className="child">
        <h1>&#x1F44B;Hii I'm Subha </h1> 
        <p>I’m a Product Designer with a passion for participate in every 
        <br/>stage of digital product, from discovery to delivery. Helping to <br/>focus the business goals on users.</p>
        <div className="home1">
        <p> I’m looking for new opportunities
        <br/>Previously I worked at Multiplica Talent Chile</p>
        <p>subhavenkatesh<br/>subhavenkatesh20032gmail.com</p>
        </div>
        <p>&#x1F447;check my profile</p>
        <div className="last">
          
  <div className="div1"><img className="ss" src="ss.jpg" alt=""/></div>
  <div className="div2"><img className="ss1" src="ss5.jpg" alt=""/></div>
  <div className="div2"><img className="ss1" src="ss2.jpg" alt=""/></div>
  {/* <div className="div3"><img className="ss2" src="/s3.jpg" alt=""/></div> */}
  </div>
      </div>
  
   
      <div className="card">
          <img src="sss.jpg" alt="" style={{ width: 100, height: 130 }}></img>
          <h5>Subha V</h5>
          <div className="c1">
            <h3>🔤Fonts</h3>
          </div>
          <div className="c2">
            <h3>🔀Flow charts</h3>
          </div>
          <div className="c3">
            <h3>🔔Icons</h3>
          </div>
          <div className="c4">
            <h3>🔍User Research</h3>
          </div>
          <div className="c5">
            <h3>🎨UI Kit</h3>
          </div>
          

      </div>
      <div className="c6">
          <img src="ds.jpg" alt=""></img>
        </div>
      <div className="c7">
        <img src="di.png" alt=""></img>
      </div>
      <div className="c8">
        <img src="bk.jpg" alt=""></img>
      </div>
      

    </div>
  );
};

export default Home;

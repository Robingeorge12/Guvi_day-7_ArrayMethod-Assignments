// 1. Get all the countries from Asia continent /region using Filter function

try {
  let url = `https://restcountries.com/v3.1/all`;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      //   console.log(res);
      let asia = res.filter((el) => {
        return el.region === "Asia";
      });
      //   console.log(asia);

      asia.forEach((el, i) => {
        console.log(el.name.common);
      });
    })
    .catch((er) => {
      console.log(er);
    });
  // console.log("yes no")
} catch (er) {
  console.log(er);
}

// 2. Get all the countries with a population of less than 2 lakhs using Filter function

let filterByPopulation = async () => {
  try {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // console.log(res);
        let pop = res.filter((el) => {
          return el.population < 200000;
        });

        pop.forEach((el, i) => {
            console.log(el.name.common);
        });

        // console.log(pop);
      })
      .catch((er) => {
        console.log(er);
      });
  } catch (er) {
    console.log(er);
  }
};

filterByPopulation();

// 3. Print the following details name, capital, flag, using forEach function

let details = async () => {
  try {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        //   console.log(res);

        res.forEach((el, i) => {
          console.log(el.name.common);
           console.log(el.capital);
            console.log(el.flag);
        });

        // console.log(pop);
      })
      .catch((er) => {
        console.log(er);
      });
  } catch (er) {
    console.log(er);
  }
};

details();

// 4. Print the total population of countries using reduce function

let totalPopulation = async () => {
  try {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        //   console.log(res);
        let total = res.reduce((acc, el, i, ar) => {
          return acc + el.population;
        }, 0);
          console.log("total population of countries :",total)
      })
      .catch((er) => {
        console.log(er);
      });
  } catch (er) {
    console.log(er);
  }
};
totalPopulation();

// 5. Print the country that uses US dollars as currency.

let usDollar = async () => {
  try {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);

        let flag = res.filter((el)=>{
          return el.currencies === "USD"

        })

//      let flag = res.map((el)=>{
//      (el.currencies).filter((e)=>{

//   return e==="USD"

//  })
//      })
        console.log(flag)
//         res.map((el)=>{

//           console.log(el.currencies)
// let ar = Object.keys(el.currencies)

// console.log(ar)
//         })
      
        
      })
      .catch((er) => {
        console.log(er);
      });
  } catch (er) {
    console.log(er);
  }
};

usDollar();




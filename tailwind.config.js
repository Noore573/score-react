/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themeblue1: "rgb(64, 204, 242)", // "themeblue1":"#40CCF2"
        themeblue2: "#80DDF7",
        themeblue3: "#C1F1FF",
        themeDarkblue1: "#13293D",
        themeDarkblue2:"#4E5F6E",
        Customegreen:"#24D208",
        CustomRed:"#FF2B2B",
        themeGray:"#8A9597",

        

        //for linearbg
        "lsec": "rgba(191, 212, 244, 1)", 
        "lthird": "rgba(191, 232, 244, 0.7)", 
        "lfourth": "rgba(64, 204, 242, 0.4)", 
        //for linear card
        "lcard_first": "rgba(191, 238, 251, 0.3)",  
        "lcard_sec": "rgba(166, 231, 249, 0.3)"  
      },
      fontSize:{
        customsidemenu:"1vw",
        Customusername:"1vw",
        CustomeCard:"0.6rem",
        CustomeCardtype:"1.2vw",
        CustomeCardnumber:"1.4vw",
        CustomeCardperc:"1vw",
        CustomeCarddate:"0.5vw",
        
        CustomeCard1number:"1.3vw",
        CustomeCard1title:"0.9vw",

        //responsive
        CustomeCardtype2:"2.7vw",
        CustomeCardnumber2:"2.9vw",
        CustomeCardperc2:"2.5vw",
        CustomeCarddate2:"2vw",

        CustomeCard1number2:"2.6vw",
        CustomeCard1title2:"2.2vw",
        CustomeCard1number3:"3vw",
        CustomeCard1title3:"2.4vw",
        PCHfont1:"1.1vw",
        PCHfont2:"0.9vw",
        PCHfont21:"1.1vw",
        PCHfont3:"2.5vw",


      },
      
      height: {
        xl: "35rem",
        CustomeCardHeight:"17vh", 
        CustomeCardHeight2:"20vh",
        CustomeContent:"42vh",
        CH1:"90vh",
        CH2:"60vh",
        //employeepro
        ECH1:"38vh",
        ECH2:"46vh",
        PCTCh1:"11vh"
        
        
      },
      width:{
        CustomeWidth:"8vw",
        CustomeWidth2:"18vw",
        CustomeWidth3:"45vw",
        CustomeWidth4:"35vw",
        CustomeC1:"0.2vw",
        //header
        cwsearchbar1:"60vw",
        //employee
        PCH1:"20vw"
      },
      borderRadius: {
        "custom-bl": "20rem",
        "custom-circle": "100%",
      },
      screens: {
        'sm': '600px',
      },

      backgroundImage: {},
      fontFamily: {
        Bebas_Neue: ["Bebas Neue", "sans-serif"],
        Rubik: ["Rubik", "sans-serif"],
        Oswald:['Oswald','serif']
        
      },
    },
  },
  plugins: [],
};


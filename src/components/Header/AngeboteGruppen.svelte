
<script>

    import Header from './Header.svelte';
	import Footer from '../Footer/Footer.svelte';
	import picHouse from '$lib/images/picHouse.png';
    import Subtract2 from '$lib/images/Subtract2.png';
	import pic4 from '$lib/images/pic4.png';
    import Subtract3 from '$lib/images/Subtract3.png';
	import pic5 from '$lib/images/pic5.png';
	import arrow from '$lib/images/arrow.svg';
 
    let title = "Angebote / Gruppen";
    let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    import { onMount } from 'svelte';
    import { xlink_attr } from 'svelte/internal';
    let Home;
   
    onMount(() => {
    });
</script>


<svelte:head>
	<title>GruppenAngebote</title>
</svelte:head>

<section>
<Header/>
<Footer/>	   
		
	
		<div>
            <div class="white-rectangle"></div>
			<img id='picHouse' class="picHouse" src= {picHouse} alt="picHouse">
			<img id='subtract2' class="subtract2" src={Subtract2} alt="pic">
            <div id='blue-circle' class='blue-circle'></div>
		</div>
	
	
		<h1 class="big-title">Gruppen & Angebote</h1>
		<h3 class="little-title">Ev. Kinderdorf Johannesstift e.V. - Kinder- und Jugendhilfe</h3>
        <p class="par">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br> 
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis <br>
            natoque penatibus et magnis dis parturient montes, nascetur <br>
            ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, <br>
            pretium quis, sem. Nulla consequat massa quis enim.
        </p>
	
	
        <div>
			<img id='pic4' class="pic4" src= {pic4} alt="pic">
			<img id='subtract2-2' class="subtract2-2" src={Subtract2} alt="pic">
		</div>
	
		<div>
            <h1 class="title-kleinkinder">Kleinkinder</h1>
            <p class="par1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br> 
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis <br>
                natoque penatibus et magnis dis parturient montes, nascetur <br>
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, <br>
                pretium quis, sem. Nulla consequat massa quis enim.
            </p>
            <img class="arrow1" src={arrow} alt="arrow">
        </div>


        <div>
			<img id='pic5' class="pic5" src= {pic5} alt="pic">
            <div id='blue-circle2' class='blue-circle2'></div>
		</div>

        <div>
            <h1 class="title-regelwohngruppen">Regelwohngruppen</h1>
            <p class="par2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br> 
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis <br>
                natoque penatibus et magnis dis parturient montes, nascetur <br>
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, <br>
                pretium quis, sem. Nulla consequat massa quis enim.
            </p>
            <img class="arrow2" src={arrow} alt="arrow">
        </div>

        <div>
			<img id='picHouse2' class="picHouse2" src= {picHouse} alt="pic">
			<img id='subtract3' class="subtract3" src={Subtract3} alt="pic">
            <div id='yellow-circle' class='yellow-circle'></div>

		</div>

        <div>
            <h1 class="title-jugendliche">Jugendliche</h1>
            <p class="par3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br> 
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis <br>
                natoque penatibus et magnis dis parturient montes, nascetur <br>
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, <br>
                pretium quis, sem. Nulla consequat massa quis enim.
            </p>
            <img class="arrow3" src={arrow} alt="arrow">
        </div>
	
		
        <div>
			<img id='picHouse3' class="picHouse3" src= {picHouse} alt="pic">
			<img id='subtract2-3' class="subtract2-3" src={Subtract2} alt="pic">
            <div id='blue-circle3' class='blue-circle3'></div>

		</div>

        <div>
            <h1 class="title-teilstationäre-angebote">Teilstationäre Angebote</h1>
            <p class="par4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br> 
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis <br>
                natoque penatibus et magnis dis parturient montes, nascetur <br>
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, <br>
                pretium quis, sem. Nulla consequat massa quis enim.
            </p>
            <img class="arrow4" src={arrow} alt="arrow">
        </div>

        <div>
			<img id='pic4-2' class="pic4-2" src= {pic4} alt="pic">
			<img id='subtract3-2' class="subtract3-2" src={Subtract3} alt="pic">
          

		</div>

        <div>
            <h1 class="title-fachdienst-inobhutnahme">Fachdienst Inobhutnahme</h1>
            <p class="par5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br> 
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis <br>
                natoque penatibus et magnis dis parturient montes, nascetur <br>
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, <br>
                pretium quis, sem. Nulla consequat massa quis enim.
            </p>
            <img class="arrow5" src={arrow} alt="arrow">
        </div>

        <div>
			<img id='pic5-2' class="pic5-2" src= {pic5} alt="pic">
            <div id='yellow-circle2' class='yellow-circle2'></div>
          

		</div>

        <div>
            <h1 class="title-fachdienst-flexible-hilfen ">Fachdienst flexible Hilfen </h1>
            <p class="par6">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br> 
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis <br>
                natoque penatibus et magnis dis parturient montes, nascetur <br>
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, <br>
                pretium quis, sem. Nulla consequat massa quis enim.
            </p>
            <img class="arrow6" src={arrow} alt="arrow">
        </div>

        <div>
			<img id='picHouse4' class="picHouse4" src= {picHouse} alt="pic">
			<img id='subtract2-4' class="subtract2-4" src={Subtract2} alt="pic">
            <div id='blue-circle4' class='blue-circle4'></div>

		</div>

        <div>
            <h1 class="title-pflegekinderdienst">Pflegekinderdienst</h1>
            <p class="par7">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br> 
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis <br>
                natoque penatibus et magnis dis parturient montes, nascetur <br>
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, <br>
                pretium quis, sem. Nulla consequat massa quis enim.
            </p>
            <img class="arrow7" src={arrow} alt="arrow">
        </div>

<style>
   
.white-rectangle {
   background-color:white;
   height:57px;
   width:200px;
   position:absolute;
   position: absolute;
   top:0px;
   right:400px;
   z-index: -1;

}
.blue-circle
   {
   background-color:#057E81;
   height:200px;
   width:200px;
   border-radius: 50% ;
   position:absolute;
   top:10px;
   right:380px;
   z-index: -2;
   overflow: hidden;
   }


.picHouse
   {
   height:625px;
   width:623px;
   top:20px;
   right:-90px;
   position:absolute;
   border-radius:50%;
   z-index: -1;
   }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
.subtract2
   {
   height:406.37px;
   width:406.37px;
   top:320px;
   right:-90px;
   position:absolute;
   border-radius:50%;
   z-index: -2;
       }
   

.little-title
   {
   color:#5f5f5f;
   text-align:left;
   vertical-align:text-top;
   font-size:14px;
   font-family:Nort;
   position: absolute;
   top: 250px;
   left: 150px;
   }
   
.big-title
   {
   color:#003541;
   text-align:left;
   vertical-align:text-top;
   font-size:46px;
   font-family:Nort;
   font-weight:bold;
   text-transform: uppercase;
   line-height:50px;
   position: absolute;
   top: 300px;
   left: 150px;
   }
   
.par{
    color:#5f5f5f;
    text-align:left;
    vertical-align:text-top;
    font-size:16px;
    font-family:Nort;
    letter-spacing:2px;
    position: absolute;
    top: 400px;
    left: 150px;
    }

.title-kleinkinder{
   color:#013642;
   text-align:left;
   vertical-align:text-top;
   font-size:24px;
   font-family:Nort;
   font-weight: bold;
   letter-spacing:10px;
   line-height:50px;
   position: absolute;
   top: 950px;
   left: 700px;
    }

.par1{
    color:#003541;
    text-align:left;
    vertical-align:text-top;
    font-size:16px;
    font-family:Nort;
    letter-spacing:2px;
    position: absolute;
    top: 1000px;
    left: 700px;
    }

.arrow1{
    position: absolute;
    top: 1150px;
    left: 700px; 
    }

.pic4
   {
   background-color:#057E81;
   height:400px;
   width:400px;
   border-radius:50%;
   position:absolute;
   top: 850px;
   left:100px;
   z-index: 1;
   }

.subtract2-2
   {
   height:300px;
   width:300px;
   top: 900px;
   left:-10px;
   position:absolute;
   border-radius:50%;
   z-index: -2;
       }

.pic5
   {
   background-color:white;
   height:400px;
   width:400px;
   border-radius:50%;
   position:absolute;
   top: 1350px;
   right:100px;
   z-index: 1;
   }

.blue-circle2
   {
   background-color:#057E81;
   height:300px;
   width:300px;
   border-radius:50%;
   position:absolute;
   top:1350px;
   right:20px;
   }

.title-regelwohngruppen{
   color:#013642;
   text-align:left;
   vertical-align:text-top;
   font-size:24px;
   font-family:Nort;
   font-weight: bold;
   letter-spacing:10px;
   line-height:50px;
   position: absolute;
   top: 1450px;
   left: 150px;
    }

.par2{
    color:#003541;
    text-align:left;
    vertical-align:text-top;
    font-size:16px;
    font-family:Nort;
    letter-spacing:2px;
    position: absolute;
    top: 1500px;
    left: 150px;
    }

.arrow2{
    position: absolute;
    top: 1650px;
    left: 150px; 
    }

.yellow-circle
   {
   background-color:#f8af00;
   height:270px;
   width:270px;
   border-radius:50%;
   position:absolute;
   top:1900px;
   left:20px;
   }
   
   
.picHouse2
   {
   height:380px;
   width:380px;
   top:1850px;
   left:100px;
   position:absolute;
   border-radius:50%;
   z-index: +1;
   }
   
.subtract3
   {
   height:270px;
   width:270px;
   top: 1950px;
   left:250px;
   position:absolute;
   border-radius:50%;
   z-index: -2;
       }

.title-jugendliche{
   color:#013642;
   text-align:left;
   vertical-align:text-top;
   font-size:24px;
   font-family:Nort;
   font-weight: bold;
   letter-spacing:10px;
   line-height:50px;
   position: absolute;
   top: 1950px;
   left: 700px;
    }

.par3{
    color:#003541;
    text-align:left;
    vertical-align:text-top;
    font-size:16px;
    font-family:Nort;
    letter-spacing:2px;
    position: absolute;
    top: 2000px;
    left: 700px;
    }

.arrow3{
    position: absolute;
    top: 2150px;
    left: 700px; 
    }
   
.picHouse3
   {
   height:380px;
   width:380px;
   top:2350px;
   right:200px;
   position:absolute;
   border-radius:50%;
   z-index: +1;
   }

.blue-circle3
   {
   background-color:#057E81;
   height:300px;
   width:300px;
   border-radius:50%;
   position:absolute;
   top:2500px;
   right:100px;
   }
   
.subtract2-3
   {
   height:300px;
   width:300px;
   top: 2300px;
   right:40px;
   position:absolute;
   border-radius:50%;
   z-index: -2;
       }

.title-teilstationäre-angebote{
   color:#013642;
   text-align:left;
   vertical-align:text-top;
   font-size:24px;
   font-family:Nort;
   font-weight: bold;
   letter-spacing:10px;
   line-height:50px;
   position: absolute;
   top: 2450px;
   left: 150px;
    }

.par4{
    color:#003541;
    text-align:left;
    vertical-align:text-top;
    font-size:16px;
    font-family:Nort;
    letter-spacing:2px;
    position: absolute;
    top: 2500px;
    left: 150px;
    }

.arrow4{
    position: absolute;
    top: 2650px;
    left: 150px; 
    }

.pic4-2
   {
   background-color:#057E81;
   height:450px;
   width:450px;
   border-radius:50%;
   position:absolute;
   top: 2850px;
   left:100px;
   z-index: 1;
   }

.subtract3-2
   {
   height:300px;
   width:300px;
   top: 2850px;
   left:20px;
   position:absolute;
   border-radius:50%;
   z-index: -2;
       }

.title-fachdienst-inobhutnahme{
   color:#013642;
   text-align:left;
   vertical-align:text-top;
   font-size:24px;
   font-family:Nort;
   font-weight: bold;
   letter-spacing:10px;
   line-height:50px;
   position: absolute;
   top: 2950px;
   left: 700px;
    }

.par5{
    color:#003541;
    text-align:left;
    vertical-align:text-top;
    font-size:16px;
    font-family:Nort;
    letter-spacing:2px;
    position: absolute;
    top: 3000px;
    left: 700px;
    }

.arrow5{
    position: absolute;
    top: 3150px;
    left: 700px; 
    }
  
.pic5-2
   {
   background-color:white;
   height:400px;
   width:400px;
   border-radius:50%;
   position:absolute;
   top: 3350px;
   right:100px;
   z-index: 1;
   }

.yellow-circle2
   {
   background-color:#F8AF00;
   height:300px;
   width:300px;
   border-radius:50%;
   position:absolute;
   top:3350px;
   right:20px;
   }

.title-fachdienst-flexible-hilfen{
   color:#013642;
   text-align:left;
   vertical-align:text-top;
   font-size:24px;
   font-family:Nort;
   font-weight: bold;
   letter-spacing:10px;
   line-height:50px;
   position: absolute;
   top: 3450px;
   left: 150px;
    }

.par6{
    color:#003541;
    text-align:left;
    vertical-align:text-top;
    font-size:16px;
    font-family:Nort;
    letter-spacing:2px;
    position: absolute;
    top: 3500px;
    left: 150px;
    }

.arrow6{
    position: absolute;
    top: 3650px;
    left: 150px; 
    }

.blue-circle4
   {
   background-color:#057E81;
   height:270px;
   width:270px;
   border-radius:50%;
   position:absolute;
   top:3900px;
   left:20px;
   }
   
   
.picHouse4
   {
   height:380px;
   width:380px;
   top:3850px;
   left:100px;
   position:absolute;
   border-radius:50%;
   z-index: +1;
   }
   
.subtract2-4
   {
   height:270px;
   width:270px;
   top: 4000px;
   left:250px;
   position:absolute;
   border-radius:50%;
   z-index: -2;
       }

.title-pflegekinderdienst{
   color:#013642;
   text-align:left;
   vertical-align:text-top;
   font-size:24px;
   font-family:Nort;
   font-weight: bold;
   letter-spacing:10px;
   line-height:50px;
   position: absolute;
   top: 3950px;
   left: 700px;
    }

.par7{
    color:#003541;
    text-align:left;
    vertical-align:text-top;
    font-size:16px;
    font-family:Nort;
    letter-spacing:2px;
    position: absolute;
    top: 4000px;
    left: 700px;
    }

.arrow7{
    position: absolute;
    top: 4150px;
    left: 700px; 
    }
   
/*
   
   .pic
   {
   height:412.57470703125px;
   width:411.52490234375px;
   right:148px;
   top:290px;
   position:absolute;
   border-radius:50%;
   z-index: 1;
   }
   
   
   .subtract
   {
   height:412.57470703125px;
   width:411.52490234375px;
   top:400px;
   right:290px;
   position:absolute;
   border-radius:50%;
       }
    

    .pic2
   {
   background-color:#057E81;
   height:341.36px;
   width:340.5px;
   border-radius:50%;
   position:absolute;
   top:1300px;
   left:550px;
   z-index: 1;
   }


   
   
   .arrow3{
    position: absolute;
    top: 1500px;
    left: 900px;  
    }
   

    .title-elternarbeit{
    color:#013642;
   text-align:left;
   vertical-align:text-top;
   font-size:24px;
   font-family:Nort;
   font-weight: bold;
   letter-spacing:10px;
   line-height:50px;
   position: absolute;
   top: 1800px;
   left: 500px;
    }

    .par4{
    color:#003541;
    text-align:left;
    vertical-align:text-top;
    font-size:16px;
    font-family:Nort;
    letter-spacing:2px;
    position: absolute;
    top: 1850px;
    left: 500px;
    margin-bottom: 20px;
    }
   
   
   .arrow4{
    position: absolute;
    top: 2000px;
    left: 500px;  
    }
    
   
    .subtract3
   {
   height:406.37px;
   width:406.37px;
   top:1780px;
  right:-30px;
   position:absolute;
   border-radius:50%;
       }

    .pic3
   {
   background-color:#057E81;
   height:341.36px;
   width:340.5px;
   border-radius:50%;
   position:absolute;
   top:1750px;
   right:148px;
   z-index: 1;
   }


   .par-bold1{
   color:#5f5f5f;
   text-align:left;
   vertical-align:text-top;
   font-size:16px;
   font-family:Nort;
   font-weight: bold;
   letter-spacing:3px;
   line-height:28px;
   position: absolute;
   top: 620px;
   left: 300px;
   }
   
   .par-bold2{
    color:#5f5f5f;
    text-align:left;
    vertical-align:text-top;
    font-size:16px;
    font-family:Nort;
    font-weight: bold;
    letter-spacing:3px;
    line-height:28px;
    position: absolute;
    top: 620px;
    left: 580px;
    }  
    
    .par5{
    color:#5f5f5f;
    text-align:left;
    vertical-align:text-top;
    font-size:16px;
    font-family:Nort;
    letter-spacing:2px;
    position: absolute;
    top: 690px;
    left: 300px;
    }
   
   .par2{
    color:#5f5f5f;
    text-align:left;
    vertical-align:text-top;
    font-size:16px;
    font-family:Nort;
    letter-spacing:2px;
    position: absolute;
    top: 690px;
    left: 580px;
    }
   
   
   
   
   .arrow2{
    position: absolute;
    top: 770px;
    left: 580px;  
    }
   
    */
</style>

</section>



<main>


</main>
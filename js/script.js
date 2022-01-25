let portfolio = [
    {
        "name": "canode1.png",
        "title": "Canode Energy",
        "description": "An Energy Company Site",
        "type": "Front End",
        "url": "https://etoyin.github.io/canode"
    },
    {
        "name": "voiceout.png",
        "title": "Voice Out Site",
        "description": "A site to voiceout the used and oppressed!",
        "type": "Full Stack",
        "url": "https://voiceout.netlify.app/"
    },
    {
        "name": "codApp.png",
        "title": "Membership Management Site",
        "description": "Membership Management Site",
        "type": "Full Stack",
        "url": "http://rccgcodmyc.herokuapp.com/"
    },
    {
        "name": "restaurant.png",
        "title": "Restaurant Site",
        "description": "Just One Page restaurant Site, will be completed upon request......",
        "type": "Front-End",
        "url": "https://codepen.io/etoyin/full/PEbyeo"
    },
    {
        "name": "gjusticess.png",
        "title": "GJustice Site",
        "description": "Worked with a startup to convert design into code",
        "type": "Front-End",
        "url": "#"
    },
    {
        "name": "ipolicy.png",
        "title": "iPolicyMart Page",
        "description": "Worked with a startup to convert design into code",
        "type": "Front-End",
        "url": "#"
    }
]




$(document).ready(function(){
    $(".clickables").on('click', function(){
        $(".clickables").removeClass("animate")
        $(".open").css("display", "block")
        $(".close").css("display", "none")
    })
    $(".open").on('click', function(){
        $(this).css("display", "none");
        $(".close").css("display", "block")
        $(".clickables").addClass("animate")
    })
    $(".close").on('click', function(){
        $(this).css("display", "none");
        $(".open").css("display", "block")
        $(".clickables").removeClass("animate")
    })
    for(let i=0; i<portfolio.length; i++){
        $(".portfolio-boxes").append(`
            <div class="card-box js-scroll" style="background-image:url('images/${portfolio[i].name}');" data-link="https://....">
                <div class='overlay-card'>
                    <div style="padding: 50px">
                        <p>${portfolio[i].description}</p>
                        <br/>
                        <a target="_blank" href="${portfolio[i].url}">Find Out More</a>
                    </div>
                </div>
            </div>
        `)
    }    
    $(".portfolio-boxes").find(".card-box").each(function(i,e){
        $(this).mouseover(function(){
            // alert($(this).text());
            $(this).find(".overlay-card").css("display", "block")
        })
        $(this).mouseout(function(){
            $(this).find(".overlay-card").css("display", "none")
        })
    })
    $(".button").mouseover(function(){
        // $(".arrow").html("&#8595;");
        $(".arrow").html("&#8595;");
        // alert("kkkkk")
    })
    $(".button").mouseout(function(){
        // $(".arrow").html("&#8595;");
        $(".arrow").html("&#8594;");
        // alert("kkkkk")
    })
    $(".button").on('click', function(){
        // windows.location("#about");
        window.location.href = "#about"
        // alert("ijijiji")
    })
    $(window).on('scroll', function(){
        let scrollTop     = $(window).scrollTop(),
            elementOffset, //= $('.appear-div').offset().top,
            navbarOffset = $('.navbar_and_line').offset().top,
            pageHeight = $(window).height(),
            distance;
            navbarDistanceToTop = navbarOffset - scrollTop;

            $('.appear-div').each(function(i, each){
                
                elementOffset = $(this).offset().top;
                distance = (elementOffset - scrollTop);
                if(distance < pageHeight){
                    $(this).find(".js-scroll").addClass("scrolled");

                    let data = $(this).attr("data");
                    $(".pad-everything").find(".menu").each(function(){
                    if(data == $(this).attr("data")){
                        $(this).addClass("active")
                    }
                    else{
                        $(this).removeClass("active")
                    }
                })
                }
            })
            // if(distance < pageHeight){
            //     $(".js-scroll").addClass("scrolled");
            //     // $(".js-scroll").css("background-color", "red")
            //     console.log(distance)
            // }
            if(scrollTop > pageHeight){
                $(".navbar_and_line").addClass("fixed")
                $(".navbar_and_line").css("width", "100%")
                
                $("#about").css("padding-top","120px")
            }else{
                $(".navbar_and_line").removeClass("fixed");
                $("#about").css("padding-top","0px");
            }
    })
})
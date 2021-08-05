/*setInterval(() => {
    let btnsub = document.getElementById("card_slot_0")
    if (btnsub != null) {
        console.log('init script')
        let btnF = document.getElementById("card_slot_0")
    
        btnF.addEventListener("click", newURL, false);
        var urls = [
            'https://sme.wyng.com/609b1afb6cc7a90269ce25b4?page=page_1037116642719',
            'https://sme.wyng.com/609b1afb6cc7a90269ce25b4?page=page_9815602659812',
            'https://sme.wyng.com/609b1afb6cc7a90269ce25b4?page=page_5698199717561',
            'https://sme.wyng.com/609b1afb6cc7a90269ce25b4?page=page_6196139382784',
            'https://sme.wyng.com/609b1afb6cc7a90269ce25b4?page=page_6360034141656',
            'https://sme.wyng.com/609b1afb6cc7a90269ce25b4?page=page_7143713667821',
            'https://sme.wyng.com/609b1afb6cc7a90269ce25b4?page=page_1037116642719',
            'https://sme.wyng.com/609b1afb6cc7a90269ce25b4?page=page_9815602659812',
            'https://sme.wyng.com/609b1afb6cc7a90269ce25b4?page=page_5698199717561',
            'https://sme.wyng.com/609b1afb6cc7a90269ce25b4?page=page_6196139382784',
            'https://sme.wyng.com/609b1afb6cc7a90269ce25b4?page=page_6360034141656',
            'https://sme.wyng.com/609b1afb6cc7a90269ce25b4?page=page_7143713667821'
        ];
    
        function newURL() {
            var i = (Math.random() * urls.length) | 0;
            location.replace(urls[i]);
        }
    }
}, 2000);


/*https://sme.wyng.com/608b5d7c4614db0096da8083
https://sme.wyng.com/608b5d7c4614db0096da8083

https://sme.wyng.com/608b5d7c4614db0096da8083

window.onload = function() {
    
};


console.log(window.location.href)

if( window.location.href == 'https://sme.wyng.com/608b5d7c4614db0096da8083' ) {
    console.log('home - init page')
    let btnF = document.getElementById("card_slot_0")

    btnF.addEventListener("click", newURL, false);
    var urls = [
        'https://sme.wyng.com/608b5d7c4614db0096da8083?page=page_3437562544218',
        'https://sme.wyng.com/608b5d7c4614db0096da8083?page=page_8296898051258',
        'https://sme.wyng.com/608b5d7c4614db0096da8083?page=page_7451904965206',
        'https://sme.wyng.com/608b5d7c4614db0096da8083?page=page_3437562544218',
        'https://sme.wyng.com/608b5d7c4614db0096da8083?page=page_8296898051258',
        'https://sme.wyng.com/608b5d7c4614db0096da8083?page=page_7451904965206'
    ];

    function newURL() {
        var i = (Math.random() * urls.length) | 0;
        location.replace(urls[i]);
    }

    
}

var element = document.getElementsByTagName("sign-up-submit");
if( window.location.href == 'https://sme.wyng.com/609b1afb6cc7a90269ce25b4/preview' ) {
    console.log('home - init page');
    let btnsub = document.getElementsByClassName("sign-up-submit")
    btnsub.addEventListener("click",function() {
        console.log('submit')
    });
}
var ele = document.getElementsByClassName("sign-up-form");
if(ele.addEventListener){
    ele.addEventListener("submit", callback, false);  //Modern browsers
}else if(ele.attachEvent){
    ele.attachEvent('onsubmit', callback);            //Old IE
}







console.log('init page')
let btnF = document.getElementById("card_slot_0")

btnF.addEventListener("click", newURL, false);
var urls = [
    'https://sme.wyng.com/608b5d7c4614db0096da8083?page=page_3437562544218',
    'https://sme.wyng.com/608b5d7c4614db0096da8083?page=page_8296898051258',
    'https://sme.wyng.com/608b5d7c4614db0096da8083?page=page_7451904965206'
];

function newURL() {
    var i = (Math.random() * urls.length) | 0;
    location.replace(urls[i]);
}

let btnF1 = document.getElementById("card_slot_1")

btnF1.addEventListener("click", newURL, false);
var urls1 = [
    'https://sme.wyng.com/608b5d7c4614db0096da8083?page=page_793969151731',
    'https://sme.wyng.com/608b5d7c4614db0096da8083?page=page_4516816715127',
    'https://sme.wyng.com/608b5d7c4614db0096da8083?page=page_6581600074258'
];

function newURL() {
    var i = (Math.random() * urls1.length) | 0;
    location.replace(urls1[i]);
}

let btnF2 = document.getElementById("card_slot_2")

btnF2.addEventListener("click", newURL, false);
var urls2 = [
    'https://sme.wyng.com/608b5d7c4614db0096da8083?page=page_6182651057837',
    'https://sme.wyng.com/608b5d7c4614db0096da8083?page=page_1839192450423',
    'https://sme.wyng.com/608b5d7c4614db0096da8083?page=page_6876901667350'
];

function newURL() {
    var i = (Math.random() * urls2.length) | 0;
    location.replace(urls2[i]);
}*/


/*
var url_to_redirect = "https://yourexternalwebsite.com";
window.wyng.addEventListener('form_submit_success', function(event){
    if (event.componentId === 'sign_up_8413190364459') {
        window.location.href = url_to_redirect;
    }
});












//initi questions
function quizNewStepCallback2(event) {
    if(event.currentQuestionIndex == 1) {
        countdown( "ten-countdown", 1, 30, false );
    }
}
window.wyng.addEventListener('quiz_new_step_shown', quizNewStepCallback2);


function countdown( elementName, minutes, seconds ){
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits( n ){
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer(){
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
            element.innerHTML = "Time is up!";
            var url_to_redirect = "https://yourexternalwebsite.com";
            window.location.href = url_to_redirect;
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            let setTime = setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );

            function quizNewStepCallback3() {
                clearTimeout(setTime);
                element.innerHTML = "Complete!";
            }
            window.wyng.addEventListener('quiz_new_result_shown', quizNewStepCallback3);
        }
    }

    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}





















//next step qustion
function quizNewStepCallback(event) {
    console.log('quiz_question_answered')
}
window.wyng.addEventListener('quiz_question_answered', quizNewStepCallback);








window.wyng.addEventListener('form_submit_success', function(event){
    console.log(event)
    if (event.componentId === "direct_upload_3517046473277") {
        function countdown( elementName, minutes, seconds ){
            var element, endTime, hours, mins, msLeft, time;
        
            function twoDigits( n ){
                return (n <= 9 ? "0" + n : n);
            }
        
            function updateTimer(){
                msLeft = endTime - (+new Date);
                if ( msLeft < 1000 ) {
                    element.innerHTML = "Time is up!";
                    var url_to_redirect = "#";
                    window.location.href = url_to_redirect;
                } else {
                    time = new Date( msLeft );
                    hours = time.getUTCHours();
                    mins = time.getUTCMinutes();
                    element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
                    let setTime = setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        
                    function quizNewStepCallback3() {
                        clearTimeout(setTime);
                    }
                    window.wyng.addEventListener('quiz_new_result_shown', quizNewStepCallback3);
                }
            }
        
            element = document.getElementById( elementName );
            endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
            updateTimer();
        }
        countdown( "ten-countdown", 1, 30 );
    }
});



////////////////////////////////////////////////////////////////////////////

//initi questions
function quizNewStepCallback2(event) {
    if(event.currentQuestionIndex == 1) {
        countdown( "ten-countdown", 1, 30, false );
    }
}
window.wyng.addEventListener('quiz_new_step_shown', quizNewStepCallback2);


function countdown( elementName, minutes, seconds ){
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits( n ){
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer(){
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
            element.innerHTML = "Time is up!";
            var url_to_redirect = "https://yourexternalwebsite.com";
            window.location.href = url_to_redirect;
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            let setTime = setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );

            function quizNewStepCallback3() {
                clearTimeout(setTime);
                element.innerHTML = "Complete!";
            }
            window.wyng.addEventListener('quiz_new_result_shown', quizNewStepCallback3);
        }
    }

    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

let btn = document.getElementById('btnSong');

btn.addEventListener('click', function() {
    let url = "https://res.cloudinary.com/dn3s8lyeh/video/upload/v1624555872/file_example_MP3_700KB_5.mp3"
    var filename = url.substring(url.lastIndexOf("/") + 1).split("?")[0];
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = function() {
    var a = document.createElement('a');
    a.href = window.URL.createObjectURL(xhr.response);
    a.download = filename; 
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    a = null
    //delete a;
  };
  xhr.open('GET', url);
  xhr.send();
})


function downloadResource() {


}

///////////////////////////////

/*
function downloadBlob(blob, filename) {
  var a = document.createElement('a');
  a.download = filename;
  a.href = blob;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function downloadResource() {
    console.log('down')
    let url = "https://res.cloudinary.com/dn3s8lyeh/video/upload/v1624555872/file_example_MP3_700KB_5.mp3"
  let filename = url.split('\\').pop().split('/').pop();
  console.log('file')
  fetch(url, {
      mode: 'no-cors'
    })
    .then(response => response.blob())
    .then(blob => {
      let blobUrl = window.URL.createObjectURL(blob);
      downloadBlob(blobUrl, filename);
    })
    .catch(e => console.error(e));
}
*/

/////////////////////////////////////////////

/*setInterval(() => {
    let btnsub = document.getElementById("card_slot_0")
    if (btnsub != null) {
        console.log('init script')
        let btnF = document.getElementById("card_slot_0")
    
        btnF.addEventListener("click", newURL, false);
        var urls = [
            'https://sme.wyng.com/609b1afb6cc7a90269ce25b4?page=page_1037116642719',
            'https://sme.wyng.com/609b1afb6cc7a90269ce25b4?page=page_9815602659812',
            'https://sme.wyng.com/609b1afb6cc7a90269ce25b4?page=page_5698199717561',
            'https://sme.wyng.com/609b1afb6cc7a90269ce25b4?page=page_6196139382784',
            'https://sme.wyng.com/609b1afb6cc7a90269ce25b4?page=page_6360034141656',
            'https://sme.wyng.com/609b1afb6cc7a90269ce25b4?page=page_7143713667821',
            'https://sme.wyng.com/609b1afb6cc7a90269ce25b4?page=page_1037116642719',
            'https://sme.wyng.com/609b1afb6cc7a90269ce25b4?page=page_9815602659812',
            'https://sme.wyng.com/609b1afb6cc7a90269ce25b4?page=page_5698199717561',
            'https://sme.wyng.com/609b1afb6cc7a90269ce25b4?page=page_6196139382784',
            'https://sme.wyng.com/609b1afb6cc7a90269ce25b4?page=page_6360034141656',
            'https://sme.wyng.com/609b1afb6cc7a90269ce25b4?page=page_7143713667821'
        ];
    
        function newURL() {
            var i = (Math.random() * urls.length) | 0;
            location.replace(urls[i]);
        }
    }
}, 2000);*/

setInterval(() => {    
    let btn = document.getElementById('btnSong');
    if (btn != null) {
        btn.addEventListener('click', function() {
            let url = "https://res.cloudinary.com/ntpmedia/video/upload/v1624999001/songs/Pitada.mp3"
            var filename = url.substring(url.lastIndexOf("/") + 1).split("?")[0];
          var xhr = new XMLHttpRequest();
          xhr.responseType = 'blob';
          xhr.onload = function() {
            var a = document.createElement('a');
            a.href = window.URL.createObjectURL(xhr.response);
            a.download = filename; 
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            a = null
            //delete a;
          };
          xhr.open('GET', url);
          xhr.send();
        })
    }
}, 2000)
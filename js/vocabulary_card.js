/*
For Vocabulary Card
*/ 
    example_front = "https://translate.google.com/#auto/en/"; //for word example link
    
    //function to get vocabulary string   
    function vocabularycard (wordlibrary,wordnumber_persection,sectionNo){
      withexplanation="";
      withoutexplanation="";
      var exampleLink = [];      
         
      //show all the vocabulary in the clicked section on the screen
      for(i=0;i<wordnumber_persection;i++){
        var word_number = (sectionNo-1)*25+i;
        //word example link from google translate
       exampleLink[word_number] =example_front.concat(wordlibrary[word_number].word);
        
        //When explanation is shown 
        withexplanation +="<div class='each_word'>"+
        "<div class='col-lg-1 col-md-2 col-sm-2 col-xs-12'><strong>"+wordlibrary[word_number].word+"</strong></div>" +
        "<div class='col-lg-1 col-md-1 col-sm-1 col-xs-3'>"+wordlibrary[word_number].category+"</div>"+
        "<div class='col-lg-2 col-md-2 col-sm-2 col-xs-3'>"+"<a target='_blank' href='"+exampleLink[word_number]+"'><span class='glyphicon glyphicon-folder-open'></span></a></div>"+
        "<div class='col-lg-8 col-md-7 col-sm-12 col-xs-12'>"+wordlibrary[word_number].explanation+"</div>"+
        "</div>"; 

        //when explanation is hided
        withoutexplanation +="<div class='each_word'>"+
        "<div id='word"+word_number+"' class='section"+sectionNo+"-word col-sm-12 col-xs-12'><strong>"+wordlibrary[word_number].word+"</strong></div>" +
        "<div class='col-sm-1 col-xs-3'>"+wordlibrary[word_number].category+"</div>"+
        "<div class='col-sm-2 col-xs-3'>"+"<a target='_blank' href='"+exampleLink[word_number]+"'><span class='glyphicon glyphicon-folder-open'></span></a></div>"+
        //"<div class='col-lg-10 col-md-10 col-sm-12 col-xs-12'><span class='glyphicon glyphicon-info-sign'></span></div>"+
        "</div>"; 
      }//end for loop
      return withexplanation, withoutexplanation;
    }

//click one of the four Section links, @@additional effect1
$('.vocabulary_section').click(function(){

    //A few of variables and arrays 
    var value = $(this).text();
    var section_number;

    /*
    Determine section number
    As a demo site, it currently has only 200 SAT vocabulary. I divide them into eight sections, with 25 words each section. 
    four sections for the non-logged-in users and the rest four sections can be seen only by the logged-in users.
    assign practiceVocabulary and practiceExplanations for words related to the clicked section 
    */
    if(value=="Section One"){
      section_number = 1;
      //modal="One";
    }else if (value=="Section Two"){
      section_number = 2;
     // modal="Two";
    }else if (value=="Section Three"){
      section_number =3;
    }else if (value=="Section Four"){
    section_number =4;
    }
    else if (value=="Section Five"){
      section_number = 5;
    }
    else if (value=="Section Six"){
      section_number = 6;
    }
    else if (value=="Section Seven"){
      section_number = 7;
    }
    else{
      section_number = 8;
    }
    
     //get the vocabulary string for SATvocabulary, 25 words per section 
      vocabularycard(satVocabulary,25,section_number);    

      //display the string, hide explanation button on the screen @@additional effect1
      $('.vocabulary').html(
        '<div class="btn btn-royalty explanation-hide">Hide Explanation</div>'+
        '<div class="btn btn-royalty explanation-show">Show Explanation</div>'+
        '<div class="word-group">'+
          withexplanation+
        '</div>'  
      );
      //hide show explanation button @@additional effect1
      $('.explanation-show').hide(10);
      //filtering effect @@filtering effect @@additional effect1
      $('.modal .each_word:odd').css({
        "color":"#47B26B"
      });

      //click hide explanation button @@click effect
      $('.explanation-hide').click(function(){ 
        $('.word-group').html(
          "<h3>Move your mouse on the word, you'll see the explanation for that word</h3>"
         + withoutexplanation);
        $('.explanation-show').show(100);      
        $('.explanation-hide').hide(100);

        //mouse hover function @@hover effect
        $('.section'+section_number+'-word').hover(function(){
          var count =$(this).attr("id").slice(4);
          $(this).append( 
            "<span>   "+satVocabulary[count].explanation+" </span>"
          );   
          $(this).find( "span:last" ).css({
            "color":"white"}); 
          $(this).css({
            "background-color":"#47B26B",
            "color":"white"
          });
        },function(){
          $(this).find( "span:last" ).remove();
          $(this).css({
            "background-color":"white",
            "color":"black"
          });
         });//end hover

      });//end click explanation-hide 
  
      //click show explanation button @@click effect
      $('.explanation-show').click(function(){
        $('.word-group').html(withexplanation);
        $('.explanation-hide').show(100); 
        $('.explanation-show').hide(100); 
        //@@filtering effect
        $('.modal .each_word:odd').css({
          "color":"#47B26B"
        });//filter
      });//end click explanation-show 
}); //end vocabulary_section


/*
animation for two hedgehog pets @@additional effect2
*/
$(document).ready(function(){
  $('#hedgehog').hover(function(){
    $('#hedgehog1').hide(500);
    $('#hedgehog2').hide(1000);
  }, function(){
    $('#hedgehog1').show(500);
    $('#hedgehog2').show(1000);
  }
);//end hedgehog img hover
});//end document ready

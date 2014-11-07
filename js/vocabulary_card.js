/*
For Vocabulary Card
*/ 

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
      section_number = 0;
    }else if (value=="Section Two"){
      section_number = 25;
    }else if (value=="Section Three"){
      section_number = 50;
    }else if (value=="Section Four"){
    section_number =75;
    }
    else if (value=="Section Five"){
      section_number = 100;
    }
    else if (value=="Section Six"){
      section_number = 125;
    }
    else if (value=="Section Seven"){
      section_number = 150;
    }
    else{
      section_number = 175;
    }

    $.getJSON('/data/SATVocabulary.json', function(satVocabulary){

      function vocabularycard (wordlibrary,wordnumber_persection){
      withexplanation="";
      withoutexplanation="";
      var exampleLink = [];      
      var example_front = "https://translate.google.com/#auto/en/"; //for word example link
    
      //show all the vocabulary in the clicked section on the screen
      for(i=0;i<wordnumber_persection;i++){
        var word_number = section_number+i;

        //Get the word sentence example link from google translate
        exampleLink[word_number] =example_front.concat(wordlibrary[word_number].word);
        
        //get the string of all the vocabulary need to be shown on the screen 
        withexplanation +="<div class='word vocabulary_card'>"+
        "<div class='col-lg-1 col-md-2 col-sm-2 col-xs-12'><strong>"+wordlibrary[word_number].word+"</strong></div>" +
        "<div class='col-lg-1 col-md-1 col-sm-1 col-xs-3'>"+wordlibrary[word_number].category+"</div>"+
        "<div class='col-lg-2 col-md-2 col-sm-2 col-xs-3'>"+"<a target='_blank' href='"+exampleLink[word_number]+"'><span class='glyphicon glyphicon-folder-open'></span></a></div>"+
        "<div class='col-lg-8 col-md-7 col-sm-12 col-xs-12'>"+wordlibrary[word_number].explanation+"</div>"+
        "</div>"; 

        //when explanation is hided, get the string of all the vocabulary need to be shown on the screen 
        withoutexplanation +="<div class='vocabulary_card'>"+
        "<div id='word"+word_number+"' class='word col-lg-1 col-md-2 col-sm-2 col-xs-12'><strong>"+wordlibrary[word_number].word+"</strong></div>" +
        "<div class='col-lg-1 col-md-1 col-sm-1 col-xs-3'>"+wordlibrary[word_number].category+"</div>"+
        "<div class='col-lg-2 col-md-2 col-sm-2 col-xs-3'>"+"<a target='_blank' href='"+exampleLink[word_number]+"'><span class='glyphicon glyphicon-folder-open'></span></a></div>"+
        "<div id='explanation"+word_number+"' class='col-lg-8 col-md-7 col-sm-12 col-xs-12'><span class='glyphicon glyphicon-map-marker'></span></div>"+
        "</div>"; 
      }//end for loop
      return withexplanation, withoutexplanation;
    }
      
      vocabularycard(satVocabulary,25);    

      //display the string on the screen
      $('.vocabulary').html(
        '<div class="btn-group">'+
          '<div class="btn btn-royalty explanation-hide">Hide Explanation</div>'+
          '<div class="btn btn-royalty explanation-show">Show Explanation</div>'+
        '</div>'+ 
        '<div class="explanation">'+
          withexplanation+
        '</div>'
      ); 

      $('.explanation-hide').click(function(){ 
        $('.explanation').html(
          "<h3>move your mouse on the word, you'll see the explanation for that word</h3>"
         + withoutexplanation);
        $('.explanation-show').show(100);      
        $('.explanation-hide').hide(100);

        $('.word').hover(function(){
            var count =$(this).attr("id").slice(4);
           $('#explanation' +count).html("<div class='col-lg-8 col-md-7 col-sm-12 col-xs-12'>"+
            satVocabulary[count].explanation+"</div>");
          },function(){
            var count =$(this).attr("id").slice(4);
            $('#explanation'+count).html("<div id='explanation"+count+"' class='col-lg-8 col-md-7 col-sm-12 col-xs-12'><span class='glyphicon glyphicon-map-marker'></span></div>");
        });
      });
      $('.explanation-show').click(function(){
        $('.explanation').html(withexplanation);
        $('.explanation-hide').show(100); 
        $('.explanation-show').hide(100); 
      });

    });//end getJSON
}); //end vocabulary_section
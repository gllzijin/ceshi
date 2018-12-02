;(function($){
  var Score = function(obj,option){
    var self = this ;
    this.obj = obj ;
    this.len = 6 ;
    this.eachWidth = null;
    this.eachHeight = 22;
    this.countEachImg();

    this.defaultDOM();
    this.defaultIcon = this.obj.find('.default-icon');
    this.description = this.obj.find('.score-description');

    this.defaultIcon.on('click',function(e){
      e.stopPropagation();
      // if(parseInt($(".answersNum").text()) < 210 && $(this).parent('.default-statu').attr('active-level') == 0)
      //   $(".answersNum").text(parseInt($(".answersNum").text())+1);     
      var level = $(this).attr('score-level');
      var _index = $(this).parents("[class^='score-']").index() - 1;
      $(this).parent('.default-statu').attr('active-level',level);
      if($(this).parents().attr("icon-type") == "score-expression"){
        $(this).parents("[class^='score-']").children('.score-description').html(self.selectLevelDescript(level,"expression"));
      }else{
        $(this).parents("[class^='score-']").children('.score-description').html(self.selectLevelDescript(level,"star"));
      }

      for(var i = 0 ; i<self.len ; i++){
        if(i < level){
          $(this).parents("[class^='score-']").find('.default-icon').eq(i).css({
             "backgroundPositionX":-self.eachWidth * (level-1)+3*(4-level)+2,
             "backgroundPositionY":-self.eachHeight * _index
          });
        }else{
          $(this).parents("[class^='score-']").find('.default-icon').eq(i).css({"backgroundPositionX":"right"});
        }
      }
      var testanswer="";
      var swiper = $(".swiper-slide");
      for(i=0;i<swiper.length;i++){
        if(i<28){
          var activeScore = $(swiper[i]).find('.score-expression .default-statu');
        }else{
          var activeScore = $(swiper[i]).find('.score-star .default-statu');
        }     
        activeScore.each(function(){
          testanswer+=parseInt($(this).attr("active-level"));
        })    
      }
      var exp  = new Date();
      exp.setTime(exp.getTime() + 24*60*60*1000);
      document.cookie = "testanswer="+escape (testanswer) + ";expires=" + exp.toGMTString();
    }) ;  
  };

  Score.prototype = {

    selectLevelDescript: function(n,str){
      var descriptHTML = '';
      if(str == "expression"){
        switch(parseInt(n))
        {
        case 1:
          descriptHTML = '非常不喜欢';
          break;
        case 2:
          descriptHTML = '不喜欢';
          break;
        case 3:
          descriptHTML = '有点不喜欢';
          break;
        case 4:
          descriptHTML = '有点喜欢';
          break;
        case 5:
          descriptHTML = '喜欢';
          break;
        case 6:
        descriptHTML = '非常喜欢';
        break;
        default:
          descriptHTML = '';
        }
      }else{
        switch(parseInt(n))
        {
        case 1:
          descriptHTML = '完全没把握';
          break;
        case 2:
          descriptHTML = '比较没把握';
          break;
        case 3:
          descriptHTML = '有点没把握';
          break;
        case 4:
          descriptHTML = '有一点把握';
          break;
        case 5:
          descriptHTML = '比较有把握';
          break;
        case 6:
          descriptHTML = '完全有把握';
          break;
        default:
          descriptHTML = '';
        }
      }
      
      return descriptHTML;
    },
    defaultDOM : function(){
      var _scoreChild = this.obj.children("[class^='score-']");
      var _len = _scoreChild.length;
      for(var i = 0; i< _len ; i++){
        var _defaultHTML = "<div class='default-statu' icon-type='"+_scoreChild.eq(i).attr('class')+"' active-level='0'></div><div class='score-description' ></div>" ;
        _scoreChild.eq(i).append(_defaultHTML);          
      }

      var _default = this.obj.find('.default-statu');

      _default.html(this.eachChildrenDOM());
    },
    eachChildrenDOM : function(){
      var _MainHTML = "" ;
        for(var j = 1 ; j <= this.len ; j++){
          _MainHTML += "<span class='default-icon'  score-level="+ j +"></span>";
        };     
        return _MainHTML;  
    },
    countEachImg : function(){
      var _this_ = this ; 
      var img = new Image();
      _this_.obj.prepend('<img class="scoreHiddenImage" style="display:none" src="" alt="">');
      img.src = 'images/icon.png';
      $(img).on('load error',function(){ 
        $('img.scoreHiddenImage').attr('src',img.src);
        each = $('img').width() / 7;
        _this_.eachWidth = 28;    
      })
    },
  };    

  $.fn.extend({
    score:function(){
      new Score(this)
    }
  })
})(jQuery);
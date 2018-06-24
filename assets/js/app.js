$(document).ready(function(){

 $(".card").click(function(e){

      $(e.currentTarget).toggleClass('card--open');
      
  });
 $(".card__like").click(function(e){
 	  e.preventDefault();
 	  e.stopPropagation();
      $(e.currentTarget).toggleClass('card__like--red');
  });
 $(".card__follow-btn").click(function(e){
 	  e.preventDefault();
 	  e.stopPropagation();
      $(e.currentTarget).toggleClass('card__follow-btn--following');
      if($('.card__follow-btn').html()=='Seguir'){
      $('.card__follow-btn').html('Siguiendo');
     }
     else{
     	$('.card__follow-btn').html('Seguir');
     }
  });
 $("#image").change(function(e){
    $(".create__image .create__img").attr('src','assets/images/squared/'+$(e.target).val());
 });
 $("#author").change(function(e){
    $(".create__profile .create__img").attr('src','assets/images/profiles/'+$(e.target).val());
 });
 $('.create__form').submit(function(e){
    	e.preventDefault();
 	    var imagen=$('#image').val();
 	    var autor=$('#author').val();
        var title=$('.create__label').children('#name').text();
        var follow=$('.create__label').children('#followers').text();
        var likes=$('.create__label').children('#likes').text();
        var following=$('.create__label').children('#following').text();
        var card=`<li class="card">
      <div class="card__highlight">
        <img class="card__img" src="./assets/images/squared/${imagen}" alt="">
      </div>
      <div class="card__content">
        <div class="card__profile-container">
          <img class="card__profile" src="./assets/images/profiles/${autor}" alt="">
        </div>
        <a class="card__like card__like--red" href="#">
          <i class="fas fa-heart"></i>
        </a>
        <div class="card__title">
          <h2>${ title }</h2>
        </div>
        <div class="card__author">
          <h3 class="card__author-name">Margot Robbie</h3>
        </div>
        <div class="card__hidden">
          <ul class="social">
            <li class="social__element">
              <div class="social__number">8526</div>
              <div class="social__text">${follow}</div>
            </li>
            <li class="social__element">
              <div class="social__number">51,3K</div>
              <div class="social__text">${likes}</div>
            </li>
            <li class="social__element">
              <div class="social__number">106</div>
              <div class="social__text">${following}</div>
            </li>
          </ul>
          <div class="card__follow">
            <button class="card__follow-btn">Seguir</button>
          </div>
        </div>
      </div>
    </li>`;
    $('.cards').prepend(card);
    $('html').animate({

    });
    $(this).get(0).reset();
    $(".create__image .create__img").attr('src','assets/images/squared/uk.png');
    $(".create__profile .create__img").attr('src','assets/images/profiles/uk.png');
  });
    
});

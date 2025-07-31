<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
  $(document).ready(function(){
    $(".container").mouseenter(function(){
      $(".card").stop().animate({
        top: "-90px"
      }, "slow");
    }).mouseleave(function(){
      $(".card").stop().animate({
        top: "5px"
      }, "slow");
    });
  });
</script>


    function Mostra_Menu()
    {
      document.getElementById("chk").checked = true;
    }

    function Fecha_Menu() 
    {
      document.getElementById("chk").checked = false;
    }
    function Load_SSView()
    {
    var 
      CenterX=((screen.Width - 732) / 2);
      CenterY=((screen.height - 456) / 2);
      propriedades="width=732,height=459,left="+CenterX+"top="+CenterY+",toolbar=0,location=((self.__WB_check_loc && self.__WB_check_loc(location)) || {}).href = 0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0";
      window.open("/ss_view/ss_view.php",0,propriedades);
    }
    
    function Get_Image(img, alt)
    {
      if (img=='-')
        {
          document.getElementById("div_tc").alt = '';
          document.getElementById("div_tc").src = '/imagens/ballin.gif'; 
        }
      else
        {
          document.getElementById("div_tc").src = '/imagens/'+img+'.gif'; //'[ '+img+' ]'; //
          document.getElementById("div_tc").alt = '[ '+alt+' ]'; 
        }  
    }
  

}

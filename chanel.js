.menuku{height:35px;background:url(http://1.bp.blogspot.com/-Dz55XjfHfIU/T2AtDWgb0aI/AAAAAAAAA9I/vZgjL1iEbgk/s1600/menutop.png) repeat-x top;font:normal 12px Arial;line-height:normal;width:100%;text-
transform:none;color:#f1f1f1;text-decoration:none;margin:0;padding:0;border-bottom: 3px solid #a21b14}
.menuku ul{margin:0;padding:0}
.menuku li{list-style:none;color:#FFF;float:left;display:inline;position:relative;margin:0;padding:0}
.menuku li a{display:block;background:0;background:url(#) no-repeat center right;color:#FFF;text-
decoration:none;font:bold 14px Arial;text-shadow: -1px -1px 0 #88140e;outline:none;margin:0;padding:5px 13px}
.menuku li a:hover{background:#2a2a2a;text-shadow: -1px -1px 0 #000}
.menuku li ul{position:absolute;z-index:10;left:0;top:100%;height:30px;width:120px;display:none;margin:0;padding:0}
.menuku li ul a{background:#2a2a2a;border-left:none;font:12px Arial;border-right:none;border-top:1px solid 

#484848;border-bottom:1px solid #000;display:block;padding:6px 10px;text-shadow: -1px -1px 0 #000}
.menuku li ul a:hover{background:#484848;}
.menuku li ul li{float:none;display:block;width:auto}
.menuku li ul ul{top:0;left:100%}
.menuku li a:hover,.menuku ul li a:hover{color:#ccc};

$(function() {
    $('.menuku li').hover(function() {
        $(this).children('ul').filter(':not(:animated)').show(200);
    }, function() {
        $(this).children('ul').hide(400);
    });
});

document.getElementById("menu").innerHTML = '<div id="top" style="position:fixed; bottom:0px; left:0px; width: 100%; top: 0px; border: 0px ">
<div class='menuku'>
<ul>
<li><a class='/' onclick='warohotv("123")' style='cursor: pointer;'>TV ONLINE</a>
<ul>
<li><a onclick='warohotv("mncgroup")' style='cursor: pointer;'>MNC GROUP</a></li>
<li><a onclick='warohotv("bagantv")' style='cursor: pointer;'>BAGANTV</a></li>
<li><a onclick='warohotv("mivotv")' style='cursor: pointer;'>MIVOTV</a></li>
<li><a onclick='warohotv("useetv")' style='cursor: pointer;'>USEETV</a></li>
<li><a onclick='warohotv("firstmedia")' style='cursor: pointer;'>FIRST MEDIA</a></li>
<li><a onclick='warohotv3("tvri")' style='cursor: pointer;'>TVRI</a></li>
<li><a onclick='warohotv("premium")' style='cursor: pointer;'>TELKOMVISION</a></li>
</ul></li>
<li><a class='/' onclick='warohotv("tvindonesia")' style='cursor: pointer;'>NASIONAL</a>
<ul>
<li><a onclick='warohotv4("jwplayerplayer")' style='cursor: pointer;'>INDONESIA</a></li>
<li><a onclick='warohotv("tvindonesia")' style='cursor: pointer;'>TV NASIONAL</a></li>
<li><a onclick='warohotv("tvindonesia2")' style='cursor: pointer;'>TV DAERAH</a></li>
<li><a onclick='warohotv("tvindonesia3")' style='cursor: pointer;'>TV INDONESIA2</a></li>
</ul></li>
<li><a class='/' onclick='warohotv("filmlaga")' style='cursor: pointer;'>MOVIES</a>
<ul>
<li><a onclick='warohotv("action")' style='cursor: pointer;'>ACTION</a>
<ul>
<li><a onclick='warohotv("action")' style='cursor: pointer;'>ACTION</a></li>
<li><a onclick='warohotv("action2")' style='cursor: pointer;'>ACTION2</a></li>
<li><a onclick='warohotv("filmlaga")' style='cursor: pointer;'>FILM LAGA</a></li>
<li><a onclick='warohotv2("subtetlemovie")' style='cursor: pointer;'>SUBT INDONESIA</a></li>
</ul>
</li>

<li><a onclick='warohotv("filmindonesia")' style='cursor: pointer;'>INDONESIA2</a>
<ul>
<li><a onclick='warohotv("filmjadul")' style='cursor: pointer;'>FILM JADUL</a></li>
<li><a onclick='warohotv("filmindonesia")' style='cursor: pointer;'>FILM INDONESIA</a></li>
<li><a onclick='warohotv("mytrans")' style='cursor: pointer;'>CINE INDONESIA</a></li>
<li><a onclick='warohotv("chanel")' style='cursor: pointer;'>INDONESIA2</a></li>
<li><a onclick='warohotv("ftv")' style='cursor: pointer;'>FTV INDONESIA</a></li>
<li><a onclick='warohotv("ftv2")' style='cursor: pointer;'>FTV INDONESIA 2</a></li>
<li><a onclick='warohotv("ftv3")' style='cursor: pointer;'>FTV INDONESIA 3</a></li>
<li><a onclick='warohotv("horor")' style='cursor: pointer;'>FILM HOROR</a></li>
<li><a onclick='warohotv("ftvsctv")' style='cursor: pointer;'>FTV SCTV</a></li>
<li><a onclick='warohotv("ftvromantis")' style='cursor: pointer;'>FILM ROMANTIS</a></li>
<li><a onclick='warohotv("filmbioskop")' style='cursor: pointer;'>FILM BIOSKOP</a></li>
</ul></li>
<li><a onclick='warohotv("moviesjapan")' style='cursor: pointer;'>JEPANG</a></li>
<li><a onclick='warohotv3("juragantomat")' style='cursor: pointer;'>INDONESIA</a></li>
</ul></li>
<li><a onclick='warohotv3("pialadunia2")' style='cursor: pointer;'>CHANEL SPORT</a>
<ul>
<li><a onclick='warohotv3("pialadunia2")' style='cursor: pointer;'>SPORT</a></li>
<li><a onclick='warohotv5("bein1")' style='cursor: pointer;'>BEIN SPORT 1</a></li>
<li><a onclick='warohotv5("bvsport")' style='cursor: pointer;'>BV SPORT</a></li>
</ul></li>
<li><a class='/' href='/'>COUNTRY</a>
<ul>
<li><a onclick='warohotv4("1234")' style='cursor: pointer;'>ARAB</a></li>
<li><a onclick='warohotv4("arab")' style='cursor: pointer;'>ARAB2</a></li>
<li><a onclick='warohotv("brazil")' style='cursor: pointer;'>BRAZIL</a></li>
<li><a onclick='warohotv("china")' style='cursor: pointer;'>CHINA</a>
<ul>
<li><a onclick='warohotv("cctv1")' style='cursor: pointer;'>CCTV1</a></li>
<li><a onclick='warohotv("cctv2")' style='cursor: pointer;'>CCTV2</a></li>
<li><a onclick='warohotv("cctv3")' style='cursor: pointer;'>CCTV3</a></li>
<li><a onclick='warohotv("cctv4")' style='cursor: pointer;'>CCTV4</a></li>
<li><a onclick='warohotv("cctv4b")' style='cursor: pointer;'>CCTV4b</a></li>
<li><a onclick='warohotv("cctv5")' style='cursor: pointer;'>CCTV5</a></li>
<li><a onclick='warohotv("cctv7")' style='cursor: pointer;'>CCTV7</a></li>
<li><a onclick='warohotv("cctv7b")' style='cursor: pointer;'>CCTV7b</a></li>
<li><a onclick='warohotv("cctv8")' style='cursor: pointer;'>CCTV8</a></li>
</ul>
</li>
<li><a onclick='warohotv("italy")' style='cursor: pointer;'>EUROPA</a></li>
<li><a onclick='warohotv("france")' style='cursor: pointer;'>FRANCE</a></li>
<li><a onclick='warohotv("tvhindia")' style='cursor: pointer;'>HINDIA</a></li>
<li><a onclick='warohotv("korea")' style='cursor: pointer;'>KOREAN</a></li>
<li><a onclick='warohotv("kuwait")' style='cursor: pointer;'>KUWAIT</a></li>
<li><a onclick='warohotv("russian")' style='cursor: pointer;'>RUSSIAN</a></li>
<li><a onclick='warohotv("thailand")' style='cursor: pointer;'>THAILAND</a></li>
<li><a onclick='warohotv3("turkish")' style='cursor: pointer;'>TURKISH</a></li>
<li><a onclick='warohotv4("europa")' style='cursor: pointer;'>USA</a></li>
<li><a onclick='warohotv("vietname")' style='cursor: pointer;'>VIETNAME</a></li>
</ul></li>
<li><a onclick='warohotv("dangdut")' style='cursor: pointer;'>MUSIC</a>
<ul>
<li><a onclick='warohotv3("tvmusic")' style='cursor: pointer;'>TV MUSIC</a></li>
<li><a onclick='warohotv("dangdut")' style='cursor: pointer;'>DANGDUT</a>
<ul>
<li><a onclick='warohotv("dangdut")' style='cursor: pointer;'>DANGDUT</a></li>
<li><a onclick='warohotv("dangdut2")' style='cursor: pointer;'>DANGDUT2</a></li>
<li><a onclick='warohotv("koplo")' style='cursor: pointer;'>KOPLO</a></li>
<li><a onclick='warohotv("roma")' style='cursor: pointer;'>ROMA IRAMA</a></li>
<li><a onclick='warohotv("yks")' style='cursor: pointer;'>OPLOSAN YKS</a></li>
<li><a onclick='warohotv("omsera")' style='cursor: pointer;'>OMSERA</a></li>
</ul></li>
<li><a onclick='warohotv("dianpisesha")' style='cursor: pointer;'>NOSTALGIA</a>
<ul>
<li><a onclick='warohotv("ebietgade")' style='cursor: pointer;'>EBIET G ADE</a></li>
<li><a onclick='warohotv("nikeardila")' style='cursor: pointer;'>NIKE ARDILA</a></li>
<li><a onclick='warohotv("dianpisesha")' style='cursor: pointer;'>DIAN PISESHA</a></li>
<li><a onclick='warohotv("pance")' style='cursor: pointer;'>PANCE</a></li>
</ul></li>
<li><a onclick='warohotv("pop")' style='cursor: pointer;'>POP</a>
<ul>
<li><a onclick='warohotv("pop")' style='cursor: pointer;'>POP</a></li>
<li><a onclick='warohotv("pop2")' style='cursor: pointer;'>POP2</a></li>
<li><a onclick='warohotv("thevirgin")' style='cursor: pointer;'>THE VIRGIN</a></li>
<li><a onclick='warohotv("wali")' style='cursor: pointer;'>WALI</a></li>
<li><a onclick='warohotv4("wali")' style='cursor: pointer;'>WALI</a></li>
<li><a onclick='warohotv("zivilia")' style='cursor: pointer;'>ZIVILIA</a></li>
</ul></li>
<li><a href='javascript:warohotv("minang")'>MINANG</a>
<ul>
<li><a onclick='warohotv("minang")' style='cursor: pointer;'>MINANG</a></li>
<li><a onclick='warohotv("minang2")' style='cursor: pointer;'>MINANG2</a></li>
<li><a onclick='warohotv("minang3")' style='cursor: pointer;'>MINANG3</a></li>
<li><a onclick='warohotv("minang4")' style='cursor: pointer;'>MINANG4</a></li>
<li><a onclick='warohotv4("minang")' style='cursor: pointer;'>MINANG5</a></li>
<li><a onclick='warohotv("ria-amelia")' style='cursor: pointer;'>RIA AMELIA</a></li>
<li><a onclick='warohotv("ria-amelia2")' style='cursor: pointer;'>RIA AMELIA 2</a></li>
<li><a onclick='warohotv("saluang")' style='cursor: pointer;'>SALUANG</a></li>
</ul></li>
<li><a onclick='warohotv("fatin")' style='cursor: pointer;'>FATIN</a></li>
<li><a onclick='warohotv("house")' style='cursor: pointer;'>HOUSE</a></li>
<li><a onclick='warohotv("komik")' style='cursor: pointer;'>KOMIK</a></li>
<li><a onclick='warohotv3("mp3")' style='cursor: pointer;'>MP3 MUSIC</a></li>
</ul></li>

</ul>
</div>';
     

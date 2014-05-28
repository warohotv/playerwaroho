jwplayer("player").setup({
  playlist: "http://gdata.youtube.com/feeds/api/playlists/PL1NSWoPNrzVu2OgElqO9xW7OnbKNRra8r?max-results=50&alt=rss",
width: "100%",
height: "500",
listbar: {'size': '220','position': 'right'},
autostart: "true",
primary: "flash",
skin: "roundster",
sharing: {
                code: encodeURI("<iframe width='638' height='478' src='http://serverrrrr.blogspot.com/2014/03/embad.html' /></iframe>"),
                link: "http://warohotv.blogspot.com/" 
             },
            
image: "http://3.bp.blogspot.com/-xxDaCET5wYE/UA2qkdhhs5I/AAAAAAAACYk/IkjgHkJRkNY/s320/LOGOKEPSUK.png",
    logo: {
    file: "http://1.bp.blogspot.com/-48Zet0D874I/UvzFP0eaQ3I/AAAAAAAAABs/l8ZM898W6TI/s1600/warohotv.png",
    position: 'top-right',
    margin: '0',
    link: "http://warohotv.blogspot.com/"
    },
    autostart: "true",
  abouttext: "Free Broadcasting",
            aboutlink: "http://warohotv.blogspot.com/"
  });
 function server1() {
jwplayer("player").setup({
  playlist: "http://gdata.youtube.com/feeds/api/playlists/PL1NSWoPNrzVu2OgElqO9xW7OnbKNRra8r?max-results=50&alt=rss",
layout: 'basic',
listbar: {position: 'right',size: 220 },
logo: {file: "http://3.bp.blogspot.com/-UPXteOoEtAg/U3WunexRi1I/AAAAAAAABO8/oMVvRj3DSI0/s1600/WAROHOTV.png",position: 'top-right',margin: '0',link: "http://warohotv.blogspot.com/"},
stretching: "exactfit",
skin: "roundster",
width: '100%',
height: '100%',
 plugins: {   'http://luwes.co/lightsout-jw/2.0/lightsout.js':{            onplay:     'on',            onpause:    'on',            oncomplete: 'on',            dockicon: true,            onidle: 'on'         }  },

sharing: {code: encodeURI("<iframe width='600' height='500' src='http://playerwaroho.blogspot.com/2014/05/1238.html' /></iframe>"),link: "http://warohotv.blogspot.com/" }
});

 }
        function server2() {
jwplayer("player").setup({
  playlist: "http://gdata.youtube.com/feeds/api/playlists/PLa5br7p1Ra-iKeGcqeKXpIv13s5FAuqjH?max-results=50&alt=rss",
listbar: {position: 'right',size: 250 },
logo: {file: "http://1.bp.blogspot.com/-48Zet0D874I/UvzFP0eaQ3I/AAAAAAAAABs/l8ZM898W6TI/s1600/warohotv.png",position: 'top-right',margin: '0',link: "http://warohotv.blogspot.com/"},
stretching: "exactfit",
skin: "roundster",
width: '100%',
height: '500',
 plugins: {   'http://luwes.co/lightsout-jw/2.0/lightsout.js':{            onplay:     'on',            onpause:    'on',            oncomplete: 'on',            dockicon: true,            onidle: 'on'         }  }, 
sharing: {code: encodeURI("<iframe width='600' height='500' src='http://playerwaroho.blogspot.com/2014/05/1238.html' /></iframe>"),link: "http://warohotv.blogspot.com/" }
});

        }

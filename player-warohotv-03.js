function clickwaroho() {
  var num=0;
        jwplayer("warohotv-oke").setup({
'modes': [ {type: 'html5'}, {type: 'flash', src: 'https://playwaroho.googlecode.com/svn/tags/jwplayer.swf'}, {type: 'download'}],
   playlist:playlist,
   width: '100%',height: '100%',logo: {file: "http://3.bp.blogspot.com/-wjtLdp0gl3w/VI9Hu9PKiwI/AAAAAAAAB6k/8Rxat1u3KTQ/s320/logo.png",position: 'top-right',margin: '0',link: "http://warohotv.blogspot.com/"},
   autostart:true,
   events:{onError:function(){ if( num <playlist.length) {num++; this.playlistNext()}}},
   
  });}
  
  function clickwaroho1() {
  var num=0;
        jwplayer("warohotv-oke").setup({
'modes': [ {type: 'html5'}, {type: 'flash', src: 'https://playwaroho.googlecode.com/svn/tags/jwplayer.swf'}, {type: 'download'}],
   playlist:playlist,
   width: '100%',height: '100%',layout: 'basic',listbar: {position: 'right',size: 240 },
   autostart:true,logo: {file: "http://3.bp.blogspot.com/-wjtLdp0gl3w/VI9Hu9PKiwI/AAAAAAAAB6k/8Rxat1u3KTQ/s320/logo.png",position: 'top-right',margin: '0',link: "http://warohotv.blogspot.com/"},
   events:{onError:function(){ if( num <playlist.length) {num++; this.playlistNext()}}},
   
  });}

function clickwaroho2() {
  var num=0;
        jwplayer("warohotv-oke").setup({
'modes': [ {type: 'html5'}, {type: 'flash', src: 'https://playwaroho.googlecode.com/svn/tags/jwplayer.swf'}, {type: 'download'}],
   playlist:playlist,
   width: '100%',height: '100%',listbar: {layout: 'basic',position: 'right',size: 240 },
   autostart:true,logo: {file: "http://3.bp.blogspot.com/-wjtLdp0gl3w/VI9Hu9PKiwI/AAAAAAAAB6k/8Rxat1u3KTQ/s320/logo.png",position: 'top-right',margin: '0',link: "http://warohotv.blogspot.com/"},
   events:{onError:function(){ if( num <playlist.length) {num++; this.playlistNext()}}},
   
  });}
  
  function clickwaroho3() {
  var num=0;
        jwplayer("warohotv-oke").setup({
'flashplayer' : 'https://playwaroho.googlecode.com/svn/tags/jwplayer.swf',
   playlist:playlist,
   width: '100%',height: '100%',listbar: {layout: 'basic',position: 'right',size: 240 },
   autostart:true,logo: {file: "http://3.bp.blogspot.com/-wjtLdp0gl3w/VI9Hu9PKiwI/AAAAAAAAB6k/8Rxat1u3KTQ/s320/logo.png",position: 'top-right',margin: '0',link: "http://warohotv.blogspot.com/"},
   events:{onError:function(){ if( num <playlist.length) {num++; this.playlistNext()}}},
   
  });}
function clickwaroho() {
  var num=0;
        jwplayer("warohotv-oke").setup({
'modes': [ {type: 'html5'}, {type: 'flash', src: 'https://playwaroho.googlecode.com/svn/tags/jwplayer.swf'}, {type: 'download'}],
   playlist:playlist,
   width: '100%',height: '100%',
   autostart:true,
   events:{onError:function(){ if( num <playlist.length) {num++; this.playlistNext()}}},
   
  });}
  
  function clickwaroho1() {
  var num=0;
        jwplayer("warohotv-oke").setup({
'modes': [ {type: 'html5'}, {type: 'flash', src: 'https://playwaroho.googlecode.com/svn/tags/jwplayer.swf'}, {type: 'download'}],
   playlist:playlist,
   width: '100%',height: '100%',layout: 'basic',listbar: {position: 'right',size: 240 },
   autostart:true,
   events:{onError:function(){ if( num <playlist.length) {num++; this.playlistNext()}}},
   
  });}

function clickwaroho2() {
  var num=0;
        jwplayer("warohotv-oke").setup({
'modes': [ {type: 'html5'}, {type: 'flash', src: 'https://playwaroho.googlecode.com/svn/tags/jwplayer.swf'}, {type: 'download'}],
   playlist:playlist,
   width: '100%',height: '100%',listbar: {layout: 'basic',position: 'right',size: 240 },
   autostart:true,
   events:{onError:function(){ if( num <playlist.length) {num++; this.playlistNext()}}},
   
  });}
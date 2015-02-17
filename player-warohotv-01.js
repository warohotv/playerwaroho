// JavaScript Document
document.write('
		var num=0;
        jwplayer("warohotv-oke").setup({
'modes': [ {type: 'html5'}, {type: 'flash', src: 'https://playwaroho.googlecode.com/svn/tags/jwplayer.swf'}, {type: 'download'}],
			playlist:playlist,
                        title: 'MNCTV ',
			width: '100%',height: '100%',
			autostart:true,
			events:{onError:function(){ if( num <playlist.length) {num++; this.playlistNext()}}},
			
		})')

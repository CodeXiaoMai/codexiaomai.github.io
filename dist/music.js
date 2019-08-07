const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: '爱要怎么说出口',
        artist: 'JJ Lin',
        url: 'http://fs.open.kugou.com/1b8ec0add2d0c335ab9a15d523f0e692/5d4ae016/G086/M09/0F/1B/NpQEAFjCpyGAZiCFADoCyOqZemU749.mp3',
        cover: '/images/ljj.jpg',
      },
      {
        name: '我们的爱',
        artist: 'JJ Lin',
        url: 'http://fs.open.kugou.com/b2bab048d52dbd6e34a3f51e5ffb3763/5d4ae0a9/G123/M05/0F/05/uw0DAFpYmGqAOprmAFU1LSRVygY182.mp3',
        cover: '/images/ljj.jpg',
      }
    ]
});
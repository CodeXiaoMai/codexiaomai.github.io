const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: '爱要怎么说出口',
        artist: 'JJ Lin',
        url: 'https://xiaomai.ga/music/爱要怎么说出口.mp3',
        cover: '/images/ljj.jpg',
      },
      {
        name: '我们的爱',
        artist: 'JJ Lin',
        url: 'https://xiaomai.ga/music/我们的爱.mp3',
        cover: '/images/ljj.jpg',
      }
    ]
});
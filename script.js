


$('#search-button').click (function(){
    let inputValue = $("#search-field").val();
    console.log(inputValue)
        $.ajax({
            // type: "GET", 
            url: "https://itunes.apple.com/search",
            data: {
                
                term: inputValue,
                media: 'music'
            },
            dataType: 'json',
            success: (function(result){
                console.log(result)
                let resultsDiv= document.getElementById('search-results')
                resultsDiv.innerHTML = " "
                // let musicDiv = document.getElementById('musicP')
                let countP = document.createElement('p')
                countP.innerText = `Total count: ${result.resultCount}`
                resultsDiv.appendChild(countP )

                for (let x of result.results) {
                    let newSongP = document.createElement("p")
                    let songLink = document.createElement("a")
                    let newArtistP = document.createElement("p")
                    let artistPic = document.createElement("img")
                    let music = document.createElement("audio")
                    // music.controls = true
                    // music.autoplay = false
                    music.src = x.previewUrl
                    artistPic.src = x.artworkUrl100
                    songLink.href = x.trackViewUrl
                    songLink.innerText = x.trackName
                    newArtistP.innerText = x.artistName
                    $(artistPic).addClass("br-100 ba h3 w3 dib")
                    $(songLink).addClass("ml0 black truncate w-100 avenir db")
                    $(newArtistP).addClass("ml0 gray truncate w-100 avenir db")
                    $(newSongP).addClass(" fl w-40 w-30-m w-20-l pa2 ma3 box w1 grow ")
                    $(music).addClass("trackPreview")
                    newSongP.appendChild(music)
                    newSongP.appendChild(artistPic)
                    newSongP.appendChild(songLink)
                    newSongP.appendChild(newArtistP)
                    resultsDiv.appendChild(newSongP)
                  

                    }
            })  
        })
})

$( "#search-results" ).on( "click", "p", function( event ){
    // event.preventDefault()
    let chosenSong = event.target
    let song = chosenSong.firstChild  
    // let song = chosenSong.first-child
    console.log(song)

    // song.autoplay = true
    song.controls = true
    
    let musicPlayer = document.getElementById("musicP")
    musicPlayer.innerHTML = " "

    let musicBox = document.getElementById("musicBox")
    musicBox.innerHTML = " "

    

   
    $(song).clone(true).appendTo(musicP)
    song.controls = false

    // divide


    let songMaterials = chosenSong.children
    // $(songMaterials).addClass("box")
    $(songMaterials).clone(true).appendTo(musicBox)
    
    

   
})







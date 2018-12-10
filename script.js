// reference documentation on jquery site. re: api 

// let searchField = document.getElementById("seach-field")
// let searchButton = document.getElementById("search-button")

// console.log(searchField)
// console.log(searchButton)


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
                    // $(artistPic).addClass("is-rounded")
                    $(songLink).addClass("ml0 black truncate w-100 avenir db")
                    $(newArtistP).addClass("ml0 gray truncate w-100 avenir db")
                    $(newSongP).addClass("fl w-40 w-50-m w-50-l pa3 ma1 box w1 grow ")
                    $(music).addClass("trackPreview")
                    newSongP.appendChild(music)
                    newSongP.appendChild(artistPic)
                    newSongP.appendChild(songLink)
                    newSongP.appendChild(newArtistP)
                    resultsDiv.appendChild(newSongP)
                    // $( "#search-results" ).on( "click", "p", function( event ) {
                    //     event.preventDefault()
                    //     let songPreview =  $( this ).find("audio")
                    //     let songMusic = document.createElement("a")

                    //     musicDiv.appendChild(songMusic)
                    // })

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
    // song.autoplay = true
    $(song).clone(true).appendTo(musicPlayer)
    song.controls = false
    // song.autoplay = true
    
    // $(song).remove()
    

    

    // let song = ( $( this ).siblings() )
    // musicDiv.appendTo(song) 
    

        // musicDiv.appendChild(songMusic)
    })



    
// use . replace to change the size of the image 






//     console.log(inputValue);
//     $.get('https://itunes-api-proxy.glitch.me/search?parameterkeyvalue', { data: inputValue }, function (results) {
//     console.log(results)
// }
// })


// $('#search-button').click (function(){
//     let inputValue = $("#search-field").val();
//     console.log(inputValue);
//     $.ajax({
//         url: "https:itunes-api-proxy.glitch.me/search?parameterkeyvalue",
//         data: inputValue,
//         success: success, function(results){
//             let title = results.WrapperType, 
//             $('#search-results').append(title),
//         dataType: JSONP,


//     })
// }
// })







// BEST SELECTRO SO FAR 
// $( "#search-results" ).on( "click", "p", function( event ) {
//     event.preventDefault()
//     console.log( $( this ).text() )
        

//         // musicDiv.appendChild(songMusic)
//     })





// $ sign works a lot like query selector all 

// in jquery on means add event listener 
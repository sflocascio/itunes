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
                resultsDiv.innerhtml = ''
                let countP = document.createElement('p')
                countP.innerText = `Total count: ${result.resultCount}`
                resultsDiv.appendChild(countP )

                for (let x of result.results) {
                    let newSongP = document.createElement("p")
                    let songLink = document.createElement("a")
                    let newArtistP = document.createElement("p")
                    let artistPic = document.createElement("img")
                    artistPic.src = x.artworkUrl100
                    songLink.href = x.trackViewUrl
                    songLink.innerText = x.trackName
                    newArtistP.innerText = x.artistName
                    // $(artistPic).addClass("is-rounded")
                    $(songLink).addClass("ml0 black truncate w-100 avenir db")
                    $(newArtistP).addClass("ml0 gray truncate w-100 avenir db")
                    $(newSongP).addClass("fl w-40 w-10-m w-10-l pa3 ma1 box w1 grow ")
                    newSongP.appendChild(artistPic)
                    newSongP.appendChild(songLink)
                    newSongP.appendChild(newArtistP)
                    resultsDiv.appendChild(newSongP)
                    
                
                }
                // $('search-results').appendChild("")
            })  

        })
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













// $.ajax({
// url: '',
// data: {
//     q: searchField.value
// }

// })

// success: function(results) {
//     console.log(results)
//     let
// }


// $ sign works a lot like query selector all 

// in jquery on means add event listener 
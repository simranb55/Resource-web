$(document).ready(function() {
    
    $(".popup-text").hide();

    //Filters thing
    $("#apply-filters").click(function() {
        let selectedFilters = [];
        $(".filter-option:checked").each(function() {
            selectedFilters.push($(this).val());
        });

        //to show whats selected from the filters
        $(".video-item").each(function() {
            let videoID = $(this).data("video");
            if (selectedFilters.includes(videoID) || selectedFilters.length === 0) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });



    
    
    $(".video-item").click(function() {
        let videoSrc = $(this).find("video source").attr("src"); 
        let textForVideo = $(this).find(".popup-text").text(); // the text from the <p> in the textbox
        let fileLink = $(this).data("link"); 

    
        let fileName = fileLink ? fileLink.split("/").pop() : ""; // this is so the file name is not "download"

        
        $(this).find(".popup-text").hide();

        $("#popup").fadeIn();
        $("#popup-video").attr("src", videoSrc)[0].play();
        
        $("#popup-text").text(textForVideo);

        // this is so the file has its original name not "download"
        if (fileLink) {
            $("#popup-text").append(`<br><a href="${fileLink}" download="${fileName}">${fileName}</a>`);
        }
    });






    // closing the pop up
    $("#popup").click(function(event) {
        if ($(event.target).closest(".popup-content").length === 0) {
            $(this).fadeOut();
            $("#popup-video")[0].pause();
        }
    });


    //text shows up when i click the close button

    $("#close-popup").click(function() {
        $("#popup").fadeOut();
        $("#popup-video").attr("src", ""); // looping the videos
        $(".video-item").each(function() {
        });
        
    });
});


//???  $("#popup-video")[0].pause();

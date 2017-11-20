document.addEventListener("DOMContentLoaded", function (event) {
    var divTweet = document.getElementsByClassName("input-tweet")[0];
    var divTweetFocus = document.getElementsByClassName("input-tweet-focus")[0];
    var textArea = document.getElementsByClassName("textarea-coment")[0];
    var button = document.getElementById("global-button-twitter-inf");
    var entryText = document.getElementById("entry-input");

    var monthNames = new Array("Jan", "Feb", "Mar",
        "Apr", "May", "Jun", "Jul", "Aug", "Sep",
        "Oct", "Nov", "Dec");

    document.addEventListener("click", function () {
        var focus = (textArea === document.activeElement);
        if (!focus && textArea.value.length === 0) {
            divTweet.style.display = 'block';
            divTweetFocus.style.display = 'none';
        }
    });
    
    entryText.addEventListener("click", function () {
        var button = document.getElementById("global-button-twitter-inf");

        divTweet.style.display = 'none';
        divTweetFocus.style.display = 'block';

        textArea.focus();
        if (textArea.value.length === 0) {
            button.disabled = true;
        }

        textArea.value = "";
        document.getElementsByClassName("count")[0].innerHTML = 140;
    });

    textArea.addEventListener("input", function () {
        var size = this.value.length;
        console.log(size);
        var button = document.getElementById("global-button-twitter-inf");
        if (this.value.length === 0 || this.value.length > 140) {
            button.disabled = true;
        } else {
            button.disabled = false;
        }
        document.getElementsByClassName("count")[0].innerHTML = 140 - size;
    });

    button.addEventListener("click", function () {
        if (textArea.value !== undefined && textArea.value.length > 0) {
            createComment(textArea.value);
        }
    });

    var createComment = function(comment) {
        var date = new Date();
        var parentComment = document.getElementsByClassName("coment-box")[0];
        console.log(comment);

        var divComment = document.createElement("div");
        divComment.className = "coment";

        var ulEle = document.createElement("ul");
        ulEle.className = "ulbox";

        var liEle = document.createElement("li");
        liEle.className = "libox";

        var divContainer = document.createElement("div");
        divContainer.className = "container-comment";

        var divImage =  document.createElement("div");
        var img = document.createElement("img");
        img.src = "assets/img/img-circulo.png";
        divImage.appendChild(img);
        divContainer.appendChild(divImage);

        var divTitle = document.createElement("div");
        divTitle.className = "titulo";
        var strongEle = document.createElement("strong");
        strongEle.textContent = "Stephanie Wong";
        divTitle.appendChild(strongEle);

        var spanTitle = document.createElement("span");
        spanTitle.className = "hora";
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        spanTitle.textContent = day + " " + monthNames[month] + " " + year + " " + hours + ":" + minutes + ":" + seconds;
        divTitle.appendChild(spanTitle);

        var divText = document.createElement("div");
        divText.className = "parrafo";
        var text = document.createElement("p");
        text.textContent = comment;
        divText.appendChild(text);

        divContainer.appendChild(divTitle);
        divContainer.appendChild(divText);
        liEle.appendChild(divContainer);
        ulEle.appendChild(liEle);
        divComment.appendChild(ulEle);

        parentComment.appendChild(divComment);
    }
})
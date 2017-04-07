USE THIS TO CREATE AN ALIAS FOR COMMIT AND PUSH

git config alias.commitandpush '! git commit -a -m "commit" && git push'

THEN USE FSWATCH TO AUTOMATICALLY DO THIS WHEN FILE IS CHANGED

fswatch -o foldername | xargs -n1 -I{} git commitandpush

najpierw instalujesz brew jeśli nie masz czyli komenda
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

potem instalujesz fswatch
brew install fswatch

potem robisz alias do git commit and push razem
git config alias.commitandpush '! git commit -a -m "commit" && git push'

i teraz uruchmiasz caly mechanizm poprzez uruchomienie w danym folderze
fswatch -o . | xargs -n1 -I{} git commitandpush
zamiast kropki mozna wstawic nazwe konkretnego folderu zeby ograniczyc ilosc synców


top webflow code

<script type="text/javascript" src="https://maciejsaw.github.io/moodlight-pro/main-code/v1/general/routesDirectLinks.js"></script>

<link rel="stylesheet" type="text/css" href="https://maciejsaw.github.io/moodlight-pro/plugins-and-libraries/tooltipster/tooltipster.bundle.min.css">
<link rel="stylesheet" type="text/css" href="https://maciejsaw.github.io/moodlight-pro/main-code/v1/general/tooltipster-additional-themes.css">
<link rel="stylesheet" type="text/css" href="https://maciejsaw.github.io/moodlight-pro/main-code/v1/general/additional-custom-css.css">

below body end code
<script type="text/javascript" src="https://maciejsaw.github.io/moodlight-pro/main-code/v1/get-scripts.js"></script>
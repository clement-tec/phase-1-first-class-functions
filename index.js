function receivesAFunction(callback) {
    callback()
}
function returnsANamedFunction() {
    return function ff() {

    }
}
function returnsAnAnonymousFunction() {
    return function() {

    }
}
function getClassNameResult(a, b) {

    if (a > b) {

        return 'win';

    } else if (a < b) {

        return 'lose';

    } else {

        return 'tie';

    }
}

   export default getClassNameResult;
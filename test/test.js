
QUnit.module('search', function() {

    QUnit.test('Test Importance Search', function(assert) {
        var mockTodo = {
            name: "Dishes",
            importance: "1",
            category: "HouseWork",
            description: "Don't let them pile up!"
        }

        function search(text) {
            if (mockTodo.importance.toLowerCase() === text.toLowerCase() || mockTodo.name.toLowerCase() === text.toLowerCase() || mockTodo.category.toLowerCase() === text.toLowerCase() || mockTodo.description.toLowerCase() === text.toLowerCase()) {
                return true;
            }
            else {
                return false;
            }
        }
        var result = search("1");
        assert.equal(result, true);
    });
    
    QUnit.test('Test Importance Search', function(assert) {
        var mockTodo = {
            name: "Dishes",
            importance: "1",
            category: "HouseWork",
            description: "Don't let them pile up!"
        }

        function search(text) {
            if (mockTodo.importance.toLowerCase() === text.toLowerCase() || mockTodo.name.toLowerCase() === text.toLowerCase() || mockTodo.category.toLowerCase() === text.toLowerCase() || mockTodo.description.toLowerCase() === text.toLowerCase()) {
                return true;
            }
            else {
                return false;
            }
        }
        var result = search("4");
        assert.equal(result, false);
    });

    QUnit.test('Test Importance Search', function(assert) {
        var mockTodo = {
            name: "Dishes",
            importance: "1",
            category: "HouseWork",
            description: "Don't let them pile up!"
        }

        function search(text) {
            if (mockTodo.importance.toLowerCase() === text.toLowerCase() || mockTodo.name.toLowerCase() === text.toLowerCase() || mockTodo.category.toLowerCase() === text.toLowerCase() || mockTodo.description.toLowerCase() === text.toLowerCase()) {
                return true;
            }
            else {
                return false;
            }
        }
        var result = search("Dishes");
        assert.equal(result, true);
    });
});



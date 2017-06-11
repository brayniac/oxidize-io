export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

  this.namespace = '/api';

  let repos = [{
      type: 'repos',
      id: '1',
      attributes: {
        owner: 'brayniac',
        name: 'green',
        status: 'ok',
        rustfmt: 'ok',
        clippy: 'ok',
      }
    }, {
      type: 'repos',
      id: '2',
      attributes: {
        owner: 'brayniac',
        name: 'yellow',
        status: 'pending',
        rustfmt: 'ok',
        clippy: 'pending',
      }
    }, {
      type: 'repos',
      id: '3',
      attributes: {
        owner: 'brayniac',
        name: 'red',
        status: 'failed',
        rustfmt: 'ok',
        clippy: 'failed',
      }
    }];

  this.get('/repos', function(db, request) {
    if(request.queryParams.name !== undefined) {
      let filteredRepos = repos.filter(function(i) {
        return i.attributes.name.toLowerCase().indexOf(request.queryParams.name.toLowerCase()) !== -1;
      });
      return { data: filteredRepos };
    } else {
      return { data: repos };
    }
  });

  // Find and return the provided rental from our rental list above
  this.get('/repos/:name', function (db, request) {
    return { data: repos.find((repo) => request.params.name === repo.name) };
  });
}

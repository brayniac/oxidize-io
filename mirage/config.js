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
        github: 'https://github.com/brayniac/histogram',
        name: 'histogram',
        overall: 'ok',
        stable: 'ok',
        beta: 'ok',
        nightly: 'ok',
        style: 'ok',
        lint: 'ok',
        fuzz: 'ok',
        "aarch64-unknown-linux-gnu": 'ok',
        "aarch64-unknown-linux-gnu-stable": 'ok',
        "aarch64-unknown-linux-gnu-beta": 'ok',
        "aarch64-unknown-linux-gnu-nightly": 'ok',
        "arm-unknown-linux-gnueabi": 'ok',
        "arm-unknown-linux-gnueabi-stable": 'ok',
        "arm-unknown-linux-gnueabi-beta": 'ok',
        "arm-unknown-linux-gnueabi-nightly": 'ok',
        "arm-unknown-linux-gnueabihf": 'ok',
        "arm-unknown-linux-gnueabihf-stable": 'ok',
        "arm-unknown-linux-gnueabihf-beta": 'ok',
        "arm-unknown-linux-gnueabihf-nightly": 'ok',
        "armv7-unknown-linux-gnueabihf": 'ok',
        "armv7-unknown-linux-gnueabihf-stable": 'ok',
        "armv7-unknown-linux-gnueabihf-beta": 'ok',
        "armv7-unknown-linux-gnueabihf-nightly": 'ok',
        "i686-unknown-linux-gnu": 'ok',
        "i686-unknown-linux-gnu-stable": 'ok',
        "i686-unknown-linux-gnu-beta": 'ok',
        "i686-unknown-linux-gnu-nightly": 'ok',
        "i686-unknown-linux-musl": 'ok',
        "i686-unknown-linux-musl-stable": 'ok',
        "i686-unknown-linux-musl-beta": 'ok',
        "i686-unknown-linux-musl-nightly": 'ok',
        "x8664-unknown-linux-gnu": 'ok',
        "x8664-unknown-linux-gnu-stable": 'ok',
        "x8664-unknown-linux-gnu-beta": 'ok',
        "x8664-unknown-linux-gnu-nightly": 'ok',
        "x8664-unknown-linux-musl": 'ok',
        "x8664-unknown-linux-musl-stable": 'ok',
        "x8664-unknown-linux-musl-beta": 'ok',
        "x8664-unknown-linux-musl-nightly": 'ok',
      }
    }, {
      type: 'repos',
      id: '2',
      attributes: {
        owner: 'brayniac',
        github: 'https://github.com/brayniac/heatmap',
        name: 'heatmap',
        overall: 'pending',
        stable: 'ok',
        beta: 'ok',
        nightly: 'ok',
        style: 'ok',
        lint: 'ok',
        fuzz: 'pending',
        "aarch64-unknown-linux-gnu": 'ok',
        "aarch64-unknown-linux-gnu-stable": 'ok',
        "aarch64-unknown-linux-gnu-beta": 'ok',
        "aarch64-unknown-linux-gnu-nightly": 'ok',
        "arm-unknown-linux-gnueabi": 'ok',
        "arm-unknown-linux-gnueabi-stable": 'ok',
        "arm-unknown-linux-gnueabi-beta": 'ok',
        "arm-unknown-linux-gnueabi-nightly": 'ok',
        "arm-unknown-linux-gnueabihf": 'ok',
        "arm-unknown-linux-gnueabihf-stable": 'ok',
        "arm-unknown-linux-gnueabihf-beta": 'ok',
        "arm-unknown-linux-gnueabihf-nightly": 'ok',
        "armv7-unknown-linux-gnueabihf": 'ok',
        "armv7-unknown-linux-gnueabihf-stable": 'ok',
        "armv7-unknown-linux-gnueabihf-beta": 'ok',
        "armv7-unknown-linux-gnueabihf-nightly": 'ok',
        "i686-unknown-linux-gnu": 'ok',
        "i686-unknown-linux-gnu-stable": 'ok',
        "i686-unknown-linux-gnu-beta": 'ok',
        "i686-unknown-linux-gnu-nightly": 'ok',
        "i686-unknown-linux-musl": 'ok',
        "i686-unknown-linux-musl-stable": 'ok',
        "i686-unknown-linux-musl-beta": 'ok',
        "i686-unknown-linux-musl-nightly": 'ok',
        "x8664-unknown-linux-gnu": 'ok',
        "x8664-unknown-linux-gnu-stable": 'ok',
        "x8664-unknown-linux-gnu-beta": 'ok',
        "x8664-unknown-linux-gnu-nightly": 'ok',
        "x8664-unknown-linux-musl": 'ok',
        "x8664-unknown-linux-musl-stable": 'ok',
        "x8664-unknown-linux-musl-beta": 'ok',
        "x8664-unknown-linux-musl-nightly": 'ok',
      }
    }, {
      type: 'repos',
      id: '3',
      attributes: {
        owner: 'brayniac',
        github: 'https://github.com/brayniac/smolping',
        name: 'smolping',
        overall: 'failed',
        stable: 'ok',
        beta: 'ok',
        nightly: 'failed',
        style: 'ok',
        lint: 'failed',
        fuzz: 'ok',
        "aarch64-unknown-linux-gnu": 'failed',
        "aarch64-unknown-linux-gnu-stable": 'ok',
        "aarch64-unknown-linux-gnu-beta": 'ok',
        "aarch64-unknown-linux-gnu-nightly": 'failed',
        "arm-unknown-linux-gnueabi": 'ok',
        "arm-unknown-linux-gnueabi-stable": 'ok',
        "arm-unknown-linux-gnueabi-beta": 'ok',
        "arm-unknown-linux-gnueabi-nightly": 'ok',
        "arm-unknown-linux-gnueabihf": 'ok',
        "arm-unknown-linux-gnueabihf-stable": 'ok',
        "arm-unknown-linux-gnueabihf-beta": 'ok',
        "arm-unknown-linux-gnueabihf-nightly": 'ok',
        "armv7-unknown-linux-gnueabihf": 'ok',
        "armv7-unknown-linux-gnueabihf-stable": 'ok',
        "armv7-unknown-linux-gnueabihf-beta": 'ok',
        "armv7-unknown-linux-gnueabihf-nightly": 'ok',
        "i686-unknown-linux-gnu": 'ok',
        "i686-unknown-linux-gnu-stable": 'ok',
        "i686-unknown-linux-gnu-beta": 'ok',
        "i686-unknown-linux-gnu-nightly": 'ok',
        "i686-unknown-linux-musl": 'ok',
        "i686-unknown-linux-musl-stable": 'ok',
        "i686-unknown-linux-musl-beta": 'ok',
        "i686-unknown-linux-musl-nightly": 'ok',
        "x8664-unknown-linux-gnu": 'ok',
        "x8664-unknown-linux-gnu-stable": 'ok',
        "x8664-unknown-linux-gnu-beta": 'ok',
        "x8664-unknown-linux-gnu-nightly": 'ok',
        "x8664-unknown-linux-musl": 'ok',
        "x8664-unknown-linux-musl-stable": 'ok',
        "x8664-unknown-linux-musl-beta": 'ok',
        "x8664-unknown-linux-musl-nightly": 'ok',
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

  let builds = [{
      type: 'builds',
      id: '1',
      attributes: {
        repo: 'brayniac/histogram',
        label: 'push: initial commit',
        overall: 'ok',
        stable: 'ok',
        beta: 'ok',
        nightly: 'ok',
        style: 'ok',
        lint: 'ok',
        fuzz: 'ok',
        "aarch64-unknown-linux-gnu": 'ok',
        "aarch64-unknown-linux-gnu-stable": 'ok',
        "aarch64-unknown-linux-gnu-beta": 'ok',
        "aarch64-unknown-linux-gnu-nightly": 'ok',
        "arm-unknown-linux-gnueabi": 'ok',
        "arm-unknown-linux-gnueabi-stable": 'ok',
        "arm-unknown-linux-gnueabi-beta": 'ok',
        "arm-unknown-linux-gnueabi-nightly": 'ok',
        "arm-unknown-linux-gnueabihf": 'ok',
        "arm-unknown-linux-gnueabihf-stable": 'ok',
        "arm-unknown-linux-gnueabihf-beta": 'ok',
        "arm-unknown-linux-gnueabihf-nightly": 'ok',
        "armv7-unknown-linux-gnueabihf": 'ok',
        "armv7-unknown-linux-gnueabihf-stable": 'ok',
        "armv7-unknown-linux-gnueabihf-beta": 'ok',
        "armv7-unknown-linux-gnueabihf-nightly": 'ok',
        "i686-unknown-linux-gnu": 'ok',
        "i686-unknown-linux-gnu-stable": 'ok',
        "i686-unknown-linux-gnu-beta": 'ok',
        "i686-unknown-linux-gnu-nightly": 'ok',
        "i686-unknown-linux-musl": 'ok',
        "i686-unknown-linux-musl-stable": 'ok',
        "i686-unknown-linux-musl-beta": 'ok',
        "i686-unknown-linux-musl-nightly": 'ok',
        "x8664-unknown-linux-gnu": 'ok',
        "x8664-unknown-linux-gnu-stable": 'ok',
        "x8664-unknown-linux-gnu-beta": 'ok',
        "x8664-unknown-linux-gnu-nightly": 'ok',
        "x8664-unknown-linux-musl": 'ok',
        "x8664-unknown-linux-musl-stable": 'ok',
        "x8664-unknown-linux-musl-beta": 'ok',
        "x8664-unknown-linux-musl-nightly": 'ok',
      }
    }, {
      type: 'builds',
      id: '2',
      attributes: {
        repo: 'brayniac/heatmap',
        label: 'pr: update readme',
        overall: 'ok',
        stable: 'ok',
        beta: 'ok',
        nightly: 'ok',
        style: 'ok',
        lints: 'ok',
        fuzz: 'ok',
        "aarch64-unknown-linux-gnu": 'ok',
        "aarch64-unknown-linux-gnu-stable": 'ok',
        "aarch64-unknown-linux-gnu-beta": 'ok',
        "aarch64-unknown-linux-gnu-nightly": 'ok',
        "arm-unknown-linux-gnueabi": 'ok',
        "arm-unknown-linux-gnueabi-stable": 'ok',
        "arm-unknown-linux-gnueabi-beta": 'ok',
        "arm-unknown-linux-gnueabi-nightly": 'ok',
        "arm-unknown-linux-gnueabihf": 'ok',
        "arm-unknown-linux-gnueabihf-stable": 'ok',
        "arm-unknown-linux-gnueabihf-beta": 'ok',
        "arm-unknown-linux-gnueabihf-nightly": 'ok',
        "armv7-unknown-linux-gnueabihf": 'ok',
        "armv7-unknown-linux-gnueabihf-stable": 'ok',
        "armv7-unknown-linux-gnueabihf-beta": 'ok',
        "armv7-unknown-linux-gnueabihf-nightly": 'ok',
        "i686-unknown-linux-gnu": 'ok',
        "i686-unknown-linux-gnu-stable": 'ok',
        "i686-unknown-linux-gnu-beta": 'ok',
        "i686-unknown-linux-gnu-nightly": 'ok',
        "i686-unknown-linux-musl": 'ok',
        "i686-unknown-linux-musl-stable": 'ok',
        "i686-unknown-linux-musl-beta": 'ok',
        "i686-unknown-linux-musl-nightly": 'ok',
        "x8664-unknown-linux-gnu": 'ok',
        "x8664-unknown-linux-gnu-stable": 'ok',
        "x8664-unknown-linux-gnu-beta": 'ok',
        "x8664-unknown-linux-gnu-nightly": 'ok',
        "x8664-unknown-linux-musl": 'ok',
        "x8664-unknown-linux-musl-stable": 'ok',
        "x8664-unknown-linux-musl-beta": 'ok',
        "x8664-unknown-linux-musl-nightly": 'ok',
      }
    }, {
      type: 'builds',
      id: '3',
      attributes: {
        repo: 'brayniac/smolping',
        label: 'push: initial commit',
        overall: 'failed',
        stable: 'ok',
        beta: 'ok',
        nightly: 'ok',
        style: 'ok',
        lint: 'ok',
        fuzz: 'ok',
        "aarch64-unknown-linux-gnu": 'ok',
        "aarch64-unknown-linux-gnu-stable": 'ok',
        "aarch64-unknown-linux-gnu-beta": 'ok',
        "aarch64-unknown-linux-gnu-nightly": 'ok',
        "arm-unknown-linux-gnueabi": 'ok',
        "arm-unknown-linux-gnueabi-stable": 'ok',
        "arm-unknown-linux-gnueabi-beta": 'ok',
        "arm-unknown-linux-gnueabi-nightly": 'ok',
        "arm-unknown-linux-gnueabihf": 'ok',
        "arm-unknown-linux-gnueabihf-stable": 'ok',
        "arm-unknown-linux-gnueabihf-beta": 'ok',
        "arm-unknown-linux-gnueabihf-nightly": 'ok',
        "armv7-unknown-linux-gnueabihf": 'ok',
        "armv7-unknown-linux-gnueabihf-stable": 'ok',
        "armv7-unknown-linux-gnueabihf-beta": 'ok',
        "armv7-unknown-linux-gnueabihf-nightly": 'ok',
        "i686-unknown-linux-gnu": 'ok',
        "i686-unknown-linux-gnu-stable": 'ok',
        "i686-unknown-linux-gnu-beta": 'ok',
        "i686-unknown-linux-gnu-nightly": 'ok',
        "i686-unknown-linux-musl": 'ok',
        "i686-unknown-linux-musl-stable": 'ok',
        "i686-unknown-linux-musl-beta": 'ok',
        "i686-unknown-linux-musl-nightly": 'ok',
        "x8664-unknown-linux-gnu": 'ok',
        "x8664-unknown-linux-gnu-stable": 'ok',
        "x8664-unknown-linux-gnu-beta": 'ok',
        "x8664-unknown-linux-gnu-nightly": 'ok',
        "x8664-unknown-linux-musl": 'ok',
        "x8664-unknown-linux-musl-stable": 'ok',
        "x8664-unknown-linux-musl-beta": 'ok',
        "x8664-unknown-linux-musl-nightly": 'ok',
      }
    }, {
      type: 'builds',
      id: '4',
      attributes: {
        repo: 'brayniac/heatmap',
        label: 'push: bugfix: fix broken test',
        overall: 'pending',
        stable: 'ok',
        beta: 'ok',
        nightly: 'ok',
        style: 'ok',
        lint: 'ok',
        fuzz: 'pending',
        "aarch64-unknown-linux-gnu": 'ok',
        "aarch64-unknown-linux-gnu-stable": 'ok',
        "aarch64-unknown-linux-gnu-beta": 'ok',
        "aarch64-unknown-linux-gnu-nightly": 'ok',
        "arm-unknown-linux-gnueabi": 'ok',
        "arm-unknown-linux-gnueabi-stable": 'ok',
        "arm-unknown-linux-gnueabi-beta": 'ok',
        "arm-unknown-linux-gnueabi-nightly": 'ok',
        "arm-unknown-linux-gnueabihf": 'ok',
        "arm-unknown-linux-gnueabihf-stable": 'ok',
        "arm-unknown-linux-gnueabihf-beta": 'ok',
        "arm-unknown-linux-gnueabihf-nightly": 'ok',
        "armv7-unknown-linux-gnueabihf": 'ok',
        "armv7-unknown-linux-gnueabihf-stable": 'ok',
        "armv7-unknown-linux-gnueabihf-beta": 'ok',
        "armv7-unknown-linux-gnueabihf-nightly": 'ok',
        "i686-unknown-linux-gnu": 'ok',
        "i686-unknown-linux-gnu-stable": 'ok',
        "i686-unknown-linux-gnu-beta": 'ok',
        "i686-unknown-linux-gnu-nightly": 'ok',
        "i686-unknown-linux-musl": 'ok',
        "i686-unknown-linux-musl-stable": 'ok',
        "i686-unknown-linux-musl-beta": 'ok',
        "i686-unknown-linux-musl-nightly": 'ok',
        "x8664-unknown-linux-gnu": 'ok',
        "x8664-unknown-linux-gnu-stable": 'ok',
        "x8664-unknown-linux-gnu-beta": 'ok',
        "x8664-unknown-linux-gnu-nightly": 'ok',
        "x8664-unknown-linux-musl": 'ok',
        "x8664-unknown-linux-musl-stable": 'ok',
        "x8664-unknown-linux-musl-beta": 'ok',
        "x8664-unknown-linux-musl-nightly": 'ok',
      }
    }];

  this.get('/builds', function(db, request) {
      return { data: builds };
  });

  // Find and return the provided rental from our rental list above
  this.get('/builds/:id', function (db, request) {
    return { data: builds.find((build) => request.params.id === build.id) };
  });
}

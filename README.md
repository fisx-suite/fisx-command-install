fisx-command-install
========

> Install component package command for fisx.


## How to use

### Install specified package

```shell
fisx install er # install the latest version, using the default endpoint
fisx install echarts@^2.0.0 # specify the version information
fisx install ecomfe/etpl@3.0.1 # install component from github
fisx install github:ecomfe/etpl@3.0.1 # is equivalent to previous commad, specify the endpoint
fisx install edp:er # install component from edp registry
fisx install npm:jquery # install component from npm
fisx install gitlab:fis-components/jquery # install component from gitlab
fisx install moye2=ecomfe/moye # specify the alias name `moye2`
fisx install https://codeload.github.com/jquery/jquery/legacy.zip/3.0.0-alpha1 # install from url
fisx intall ./xx/mypackage.zip # install from local
```

By default, the component package information will always save to `dependencies` of `package.json`.

If not specify the endpoint, it'll use the default `edp` endpoint. If you wanna change the default `endpoint`, using the `component.defaultEndPoint` configure item:

```javascript
fis.set('component.defaultEndPoint', {type: 'github', value: 'ecomfe'});
fis.set('component.defaultEndPoint', {type: 'npm'}); // default using `http://registry.npmjs.org`
fis.set('component.defaultEndPoint', {type: 'npm', value: '<your default registry>'});
```

If using gitlab, some configures you can define:

```javascript
fis.set('component.defaultGitlabDomain', 'http://<your gitlab domain>');
fis.set('component.defaultGitlabToken', '<private token>');
```

The private token information, you can refer [here](http://doc.gitlab.com/ce/ci/api/README.html). By default the private token value will be read from environment variable `GITLAB_TOKEN`. 

## Init project dependence

```javascript
fisx install # install all deps and devdeps specified in `package.json`
fisx install --production # only install dependencies, exclude devdependencies
```

### View help information

```shell
fisx install -h
```

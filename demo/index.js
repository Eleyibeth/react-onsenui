import React from 'react';
import ReactDOM from 'react-dom';

import ons from '../OnsenUI/build/js/onsenui.js';

import {
  Page,
  Navigator,
  Toolbar,
  List,
  ListItem,
  Button
} from 'react-onsenui';

import PageExample from './examples/Page';
import ListExample from './examples/List';
import TabbarExample from './examples/Tabbar';
import AlertDialogExample from './examples/AlertDialog';
import SplitterExample from './examples/Splitter';
import InputExample from './examples/Input';

class Examples extends React.Component {
  constructor(props) {
    super(props);

    this.state = {class: 'test'};

    this.examples = [
      {
        title: 'Page',
        component: PageExample
      },
      {
        title: 'List',
        component: ListExample
      },
      {
        title: 'Tabbar',
        component: TabbarExample
      },
      {
        title: 'Alert dialog',
        component: AlertDialogExample
      },
      {
        title: 'Splitter',
        component: SplitterExample
      },
      {
        title: 'Input',
        component: InputExample
      }
    ];
  }

  goto(example) {
    this.props.navigator.pushPage({
      component: example.component,
      props: {
        key: example.title
      }
    });
  }

  render() {
    return (
      <Page style={{background: 'green'}}>
        <Toolbar>
          <div className="center">
            Example
          </div>
        </Toolbar>

        <List
          dataSource={this.examples}
          renderRow={(example) => (
            <ListItem key={example.title} onClick={this.goto.bind(this, example)}>{example.title}</ListItem>
          )}
        />
      </Page>
    );
  }
}

class App extends React.Component {
  renderPage(route, navigator) {
    const props = route.props || {};
    props.navigator = navigator;

    return React.createElement(route.component, route.props);
  }

  render() {
    return (
      <Navigator
        renderPage={this.renderPage}
        initialRoute={{
          component: Examples,
          props: {
            key: 'examples'
          }
        }}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

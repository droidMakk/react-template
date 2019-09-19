import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, Welcome } from '@storybook/react/demo';

import { Input } from "../src/components";

storiesOf('Button',module)
    .add('with text',() => <Button>Hello World</Button>)
    .add('with emoji 😁',() => <Button><span role="img" aria-label="btn" >✌🆒</span></Button>)

storiesOf('Input',module)
    .add('text enter',() => <Input />)

storiesOf('Welcome',module)
    .add('with text',() => <Welcome />)
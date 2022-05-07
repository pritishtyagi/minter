import * as React from 'react';
import { InputWrapper,Input, TextInput} from '@mantine/core';

export function MinterInput() {
  return (
    <div>
        <InputWrapper label="Input label">
            <Input />
        </InputWrapper>
    
        <TextInput label="Input label" description="Input description" />
    </div>
  )
}


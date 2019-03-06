import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'

class BraftTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render () {

        const controls = [
          {
            key: 'bold',
            text: <b>加粗</b>
          },
          'italic', 'underline', 'separator', 'link', 'separator', 'media'
        ]
    
        return (
          <div className="editor-wrapper">
            <BraftEditor
              controls={controls}
              contentStyle={{height: 410, boxShadow: 'inset 0 1px 3px rgba(0,0,0,.1)'}}
            />
          </div>
        )
    
      }
}

export default BraftTest;
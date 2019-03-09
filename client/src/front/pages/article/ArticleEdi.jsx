import React from 'react';
import BraftEditor from 'braft-editor';

import 'braft-editor/dist/index.css';


import { async } from '_rxjs@6.4.0@rxjs/internal/scheduler/async';
import { Button } from 'antd';
class ArticleEdi extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            editorState: BraftEditor.createEditorState('<p>Hello <b>World!</b></p>'), // 设置编辑器初始内容
            outputHTML: '<p></p>'
         };
    }
    componentDidMount () {
        this.isLivinig = true
        // 3秒后更改编辑器内容
      }
    
      componentWillUnmount () {
        this.isLivinig = false
      }
    
      handleChange = (editorState) => {
        console.log("==================");
        console.log(editorState.toHTML())
        this.setState({
          editorState: editorState,
          outputHTML: editorState.toHTML()
        })
      }

      saveArticle =  ()=>{
        const htmlContent = this.state.editorState.toHTML()
        // const result = await saveEditorContent(htmlContent);
        // console.log(result);
        console.log(htmlContent);
      }
      // 给父组件传值 
      clickTo = ()=>{
        if(this.props.onSubmit){
          this.props.onSubmit(this.state.outputHTML);
        }
      }

      preview = () => {

        if (window.previewWindow) {
          window.previewWindow.close()
        }
    
        window.previewWindow = window.open()
        window.previewWindow.document.write(this.buildPreviewHtml())
        window.previewWindow.document.close()
    
      }
    
      buildPreviewHtml () {
    
        return `
          <!Doctype html>
          <html>
            <head>
              <title>Preview Content</title>
              <style>
                html,body{
                  height: 100%;
                  margin: 0;
                  padding: 0;
                  overflow: auto;
                  background-color: #f1f2f3;
                }
                .container{
                  box-sizing: border-box;
                  width: 1000px;
                  max-width: 100%;
                  min-height: 100%;
                  margin: 0 auto;
                  padding: 30px 20px;
                  overflow: hidden;
                  background-color: #fff;
                  border-right: solid 1px #eee;
                  border-left: solid 1px #eee;
                }
                .container img,
                .container audio,
                .container video{
                  max-width: 100%;
                  height: auto;
                }
                .container p{
                  white-space: pre-wrap;
                  min-height: 1em;
                }
                .container pre{
                  padding: 15px;
                  background-color: #f1f1f1;
                  border-radius: 5px;
                }
                .container blockquote{
                  margin: 0;
                  padding: 15px;
                  background-color: #f1f1f1;
                  border-left: 3px solid #d1d1d1;
                }
              </style>
            </head>
            <body>
              <div class="container">${this.state.editorState.toHTML()}</div>
            </body>
          </html>
        `
    
      }
    
    render() {
        const { editorState, outputHTML } = this.state
        const extendControls = [
          {
            key: 'custom-button',
            type: 'button',
            text: '预览',
            onClick: this.preview
          },
          {
            key:''
          }
        ]
    
    return (
      <div className="edit">
        <div className="editor-wrapper editContent">
          <BraftEditor
            value={editorState}
            onChange={this.handleChange}
            onSave={this.saveArticle}
            contentStyle={{height: 400, boxShadow: 'inset 0 1px 3px rgba(0,0,0,.1)',background:'#abcdef'}}
            extendControls ={extendControls}
            
          />
        </div>  
      </div>
    );
    }
}

export default ArticleEdi;

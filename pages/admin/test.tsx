import { useState, useCallback } from 'react'
import { createEditor, Transforms, Editor, Text } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

const ElementWrapper = props => {
  return (
    <div className='flex flex-col' {...props.attributes}>
      <div className='flex'>
        <div className='flex-none w-8 text-gray-500 text-lg text-center' contentEditable={false}>
          x
        </div>
        {props.children}
      </div>
      <div className='bg-red-100 text-center' contentEditable={false}>
        --------
        <button>(+)</button>
        --------
      </div>
    </div>
  )
}
const CodeElement = props => {
  return (
    <ElementWrapper>
      <pre className='bg-gray-300 flex-auto'>
        <code>{props.children}</code>
      </pre>
    </ElementWrapper>
  )
}

const DefaultElement = props => {
  return (
    <ElementWrapper>
      <p className='focus:bg-gray-300 hover:bg-gray-300 flex-auto'>{props.children}</p>
    </ElementWrapper>
  )
}

const Leaf = props => {
  return (

    <span
      {...props.attributes}
      style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}
    >
      {props.children}
    </span>
  )
}

const Test = () => {
  const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: 'xxxxxx' }]
    },
    {
      type: 'code',
      children: [{ text: 'xxxxxx\nddd' }]
    }
  ]
  const [editor] = useState(() => withReact(createEditor()))
  const [value, setValue] = useState(initialValue)
  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, [])

  const renderLeaf = useCallback(props => {
    return <Leaf {...props} />
  }, [])

  return (
    <>
      <div className='flex flex-col h-screen'>
        <h1 className='bg-gray-100 flex-none'>
          Testing editor
        </h1>
        <Slate editor={editor} value={value}>
          <Editable
            className='flex-auto h-64 bg-blue-100 overflow-auto'
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            onKeyDown={event => {
              console.log(event.key === 'Enter')
              const [blockType] = Editor.nodes(editor)
              console.log({ blockType })
              if (event.key === 'Enter') {
                event.preventDefault()
                if (event.ctrlKey) {
                  Transforms.insertNodes(editor, {
                    type: 'paragraph',
                    children: [{ text: 'xxxxxx' }]
                  })
                } else {
                  Transforms.insertText(editor, '\n')
                }
              }
              if (!event.ctrlKey) {
                return
              }

              switch (event.key) {
                // When "`" is pressed, keep our existing code block logic.
                case 'c': {
                  event.preventDefault()
                  const [match] = Editor.nodes(editor, {
                    match: n => n.type === 'code'
                  })
                  Transforms.setNodes(
                    editor,
                    { type: match ? null : 'code' },
                    { match: n => Editor.isBlock(editor, n) }
                  )
                  break
                }

                // When "B" is pressed, bold the text in the selection.
                case 'b': {
                  event.preventDefault()
                  Transforms.setNodes(
                    editor,
                    { bold: true },
                    { match: n => Text.isText(n), split: true }
                  )
                  break
                }
              }
            }}
          />
        </Slate>
        <div className='flex-none'>
          Aquí los botones
        </div>
      </div>
    </>
  )
}

export default Test

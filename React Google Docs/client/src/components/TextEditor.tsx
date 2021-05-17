import React, { useCallback, useEffect, useState } from 'react';
import Quill, { DeltaOperation } from 'quill';
import '../assets/common.css';
import 'quill/dist/quill.snow.css';
import { io } from 'socket.io-client';  
import { useParams } from 'react-router';
import { RouterParamType } from '../assets/Types';
import { TOOLBAR_OPTIONS, SAVE_INTERVAL_MS } from '../assets/constants';

export const TextEditor = () => {
    const { id: documentId } = useParams<RouterParamType>();
    const [socket, setSocket] = useState<any>();
    const [quill, setQuill] = useState<Quill>();

    useEffect(() => {
        const socketLet = io('http://localhost:3001');

        setSocket(socketLet);

        return () => {
            socketLet.disconnect();
        }
    }, []);

    useEffect(() => {
        if (socket == null || quill == null) return
    
        socket.once("load-document", (document: any) => {
          quill.setContents(document)
          quill.enable()
        })
    
        socket.emit("get-document", documentId)
      }, [socket, quill, documentId])
    
      useEffect(() => {
        if (socket == null || quill == null) return
    
        const interval = setInterval(() => {
          socket.emit("save-document", quill.getContents())
        }, SAVE_INTERVAL_MS)
    
        return () => {
          clearInterval(interval)
        }
      }, [socket, quill])   

    useEffect(() => {
        if(socket === null || quill === null) return;

        const changeTextHandler = (delta: any) => {
            quill?.updateContents(delta)
        }

        socket?.on('recieve-changes', changeTextHandler);

        return() => {
            socket?.off('recieve-changes', changeTextHandler);
        }
    }, [socket, quill]);

    useEffect(() => {
        if(socket === null || quill === null) return;

        const changeTextHandler = (delta: any, oldDelta: any, source: string) => {
            if(source !== 'user') return;

            socket.emit('send-changes', delta)
        }

        quill?.on('text-change', changeTextHandler);

        return() => {
            quill?.off('text-change', changeTextHandler);
        }
    }, [socket, quill]);
    
    const wrapperRef = useCallback((wrapper) => {
        if(wrapper === null) return null;
        wrapper.innerHTML = '';
        const editor = document.createElement('div');
        wrapper.append(editor);

        const q = new Quill(editor, {theme: 'snow', modules: { toolbar: TOOLBAR_OPTIONS }});
        q.enable(false);
        q.setText('Loading...');
        setQuill(q);
    }, [])

    return (
        <div className = 'container' ref = { wrapperRef }>
            
        </div>
    )
}

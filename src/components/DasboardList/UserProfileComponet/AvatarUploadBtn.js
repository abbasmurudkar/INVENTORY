import React, { useState, useRef } from 'react'
import AvatarEditor from 'react-avatar-editor';
import { Alert, Button, Modal } from 'rsuite'
import { useModalState } from '../../../misc/Helper'

function AvatarUploadBtn() {
    const fileInputTypes = ".png, .jpeg, .jpg"
    const acceptedFileTypes = ['image/png', 'image/jpeg', 'image/pjpeg'];
    const isValidFile = file => acceptedFileTypes.includes(file.type)
    const { isOpen, open, close } = useModalState()
    const [img, setimg] = useState(null)
    const avatarEditorRef = useRef()
    const onFileInputChange = (ev) => {
        const currFiles = ev.target.files

        if (currFiles.length === 1) {
            const file = currFiles[0]
            if (isValidFile(file)) {
                setimg(file)
                open()
            } else {
                Alert.warning(`Wrong file type ${file.type}`, 4000)
            }
        }
    }
    const getBlob = (canvas)=>{
        return new Promise((resolve, reject)=>{
            canvas.toBlob((blob)=>{
                if(blob){
                    resolve(blob)
                }
                else{
                    reject(new Error('File Process Error'))
                }
            })
        })
    }
    const onUploadClick = async () =>{
        const canvas = avatarEditorRef.current.getImageScaledToCanvas()
        try{
          const blob = await getBlob(canvas)
        }
        catch(err){

        }
    }
    return (
        <div className='mt-3 text-center'>
            <div>
                <label htmlFor='avatar-upload' className='d-block cursor-pointer padded'>
                    <p style={{ fontSize: "16px", color: "grey", fontWeight: "normal" }} >Select new Avatar</p>
                    <input
                        id="avatar-upload"
                        type="file"
                        style={{ display: "none" }}
                        accept={fileInputTypes}
                        onChange={onFileInputChange}
                    />
                </label>
                <Modal show={isOpen} onHide={close}>
                    <Modal.Header>
                        <Modal.Title>
                            Adjust and Upload New Avatar
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='d-flex justify-content-center align-items-center h-100'>

                      {img &&  <AvatarEditor
                      ref={avatarEditorRef}
                            image={img}
                            width={200}
                            height={200}
                            border={10}
                            borderRadius={100}
                            rotate={0}
                        />}
                        </div>

                    </Modal.Body>
                    <Modal.Footer >
                        <Button block onClick={onUploadClick} appearance="ghost">Upload new Avatar</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default AvatarUploadBtn
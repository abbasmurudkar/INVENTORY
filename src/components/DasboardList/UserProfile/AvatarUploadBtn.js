import React, { useState, useRef } from 'react'
import AvatarEditor from 'react-avatar-editor';
import { Alert, Button, Modal } from 'rsuite'
import { useProfile } from '../../../context/Profile.context';
import { db, storage } from '../../../misc/Firebase';
import { useModalState } from '../../../misc/Helper'
import ProfileAvatar from '../../DASHBOARD/ProfileAvatar';

function AvatarUploadBtn() {
    const {profile} = useProfile()
    const fileInputTypes = ".png, .jpeg, .jpg"
    const acceptedFileTypes = ['image/png', 'image/jpeg', 'image/pjpeg'];
    const isValidFile = file => acceptedFileTypes.includes(file.type)
    const { isOpen, open, close } = useModalState()
    const [img, setimg] = useState(null)
    const [isLoading, setisLoading] = useState(false)
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
        setisLoading(true)
        try{
          const blob = await getBlob(canvas)
          const avatarFileRef = storage.ref(`/profiles/${profile.uid}`).child('Avatar')

          const UploadAvatarResult = await avatarFileRef.put(blob,{
              cacheControl: `public, max-age-${3600 * 24 * 3}`
          })
          const downloadURL = await UploadAvatarResult.ref.getDownloadURL()
          const userAvatarRef =  db.ref(`/profiles/${profile.uid}`).child('Avatar')
          userAvatarRef.set(downloadURL)
          setisLoading(false)
          Alert.info("Avatar has been Uploaded", 4000)
        }
        catch(err){
            setisLoading(false)
            Alert.error(err.message,4000)
        }
    }
    return (
        <div className='mt-3 text-center'>
            <ProfileAvatar src={profile.Avatar} name={profile.Name} className="width-200 height-200 img-fullsize font-huge"/>
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
                        <Button block disabled={isLoading} onClick={onUploadClick} appearance="ghost">Upload new Avatar</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default AvatarUploadBtn
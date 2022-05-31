import React, { useState } from 'react'
import { Alert, Button, Icon, Tag } from 'rsuite'
import { auth } from '../../../misc/Firebase'
import firebase from 'firebase/app'

function ProviderBlock() {
    console.log(auth.currentUser)
    const [isConnected, setConnected] = useState({
        'google.com': auth.currentUser.providerData.some((data) => data.providerId === 'google.com'),
        'facebook.com': auth.currentUser.providerData.some((data) => data.providerId === 'facebook.com'),
        'github.com':auth.currentUser.providerData.some((data)=>data.providerId === 'github.com')

    })
    const updateIsConnected = (providerId, value) => {
        setConnected(p => {
            return {
                ...p,
                [providerId]: value
            }
        })
    }
    const unlink = async (providerId) => {
        try {
            if (auth.currentUser.providerData.length === 1) {
                throw new Error(`You Cannot Disconnect from ${providerId}`)
            }
            await auth.currentUser.unlink(providerId)
            updateIsConnected(providerId, false)
            Alert.info("Disconnected From ProviderId", 4000)
        }
        catch (err) {
            Alert.error(err.message, 4000)
        }
    }
    const unLinkGoogle = () => {
        unlink('google.com')
    }
    const unLinkFacebook = () => {
        unlink('facebook.com')
    }
    const unLinkGithub = () => {
        unlink('github.com')
    }

    const Link = async (provider) => {
        try {
            await auth.currentUser.linkWithPopup(provider)
            Alert.info(`Linked To ${provider.providerId}`, 4000)
            updateIsConnected(provider.providerId, true)

        }
        catch (err) {
            Alert.error(err.message, 4000)
        }
    }

    const linkGoogle = () => {
        Link(new firebase.auth.GoogleAuthProvider())
    }
    const linkFacebook = () => {
        Link(new firebase.auth.FacebookAuthProvider())
    }
    const linkGithub = () => {
        Link(new firebase.auth.GithubAuthProvider())
    }
    return (
        <div>
            <div className='d-flex justify-content-center align-content-center mt-3'>
                {isConnected['google.com'] &&
                    <Tag color="green" closable onClose={unLinkGoogle}>
                        <Icon icon="google" /> Connected
                    </Tag>
                }
                {isConnected['facebook.com'] &&
                    <Tag color="blue" closable onClose={unLinkFacebook}>
                        <Icon icon="facebook" /> Connected
                    </Tag>
                }
                 {isConnected['github.com'] &&
                    <Tag closable onClose={unLinkGithub}>
                        <Icon icon="github" /> Connected
                    </Tag>
                }
            </div>
            <div className='mt-2'>
                {!isConnected['google.com'] &&
                    <Button block color="green" onClick={linkGoogle}>
                        <Icon icon="google" /> Link to Google
                    </Button>
                }
                {!isConnected['facebook.com'] &&
                    <Button block color="blue" onClick={linkFacebook}>
                        <Icon icon="facebook" /> Link to Facebook
                    </Button>
                }
                {!isConnected['github.com'] &&
                    <Button block color="white" onClick={linkGithub}>
                        <Icon icon="github" /> Link to Github
                    </Button>
                }
            </div>
        </div>
    )
}

export default ProviderBlock
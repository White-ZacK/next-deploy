"use client";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt"
const PageMid = () => {

    const roomId = "1";
    const Call = async (element) =>{
        const appID=2117360225;
        const serverSecret= "82670f70ce3e1e83edf8f40748a5d4fd";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "itmain");
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            turnOnMicrophoneWhenJoining: true,
            turnOnCameraWhenJoining: true,
            showMyCameraToggleButton: true,
            showMyMicrophoneToggleButton: true,
            showAudioVideoSettingsButton: true,
            showScreenSharingButton: false,
            showTextChat: false,
            showUserList: false,
            maxUsers: 2,
            layout: "Auto",
            showLayoutButton: false,
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
        })
    }
  return (
    <div className='w-3/5 pt-10 min-h-full bg-gray-100 rounded-[3rem] ' >

        <div ref={Call} id='calldiv'/>

        <script>
            var calldiv = document.getElementByClassName("zego_model_parent");
            calldiv.style.backgroundColor = "red";

        </script>
    
    </div>
  )
}

export default PageMid
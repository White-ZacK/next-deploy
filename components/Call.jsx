import { useEffect, useRef } from 'react';
import { useSession } from 'next-auth/react';

const PageMid = () => {
  const { data: session } = useSession();
  const roomId = '1';
  const name = session?.user.name;
  const callRef = useRef(null);

  useEffect(() => {
    const loadZegoUIKitPrebuilt = async () => {
      const { ZegoUIKitPrebuilt } = await import('@zegocloud/zego-uikit-prebuilt');
      const appID = 2117360225;
      const serverSecret = '82670f70ce3e1e83edf8f40748a5d4fd';
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        Date.now().toString(),
        name
      );
      const zc = ZegoUIKitPrebuilt.create(kitToken);
      zc.joinRoom({
        container: callRef.current,
        turnOnMicrophoneWhenJoining: true,
        turnOnCameraWhenJoining: true,
        showMyCameraToggleButton: true,
        showMyMicrophoneToggleButton: true,
        showAudioVideoSettingsButton: true,
        showScreenSharingButton: false,
        showTextChat: false,
        showUserList: false,
        maxUsers: 2,
        layout: 'Auto',
        showLayoutButton: false,
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
      });
    };

    if (typeof window !== 'undefined') {
      loadZegoUIKitPrebuilt();
    }
  }, []);

  return (
    <div className='w-3/5 pt-10 min-h-full bg-gray-100 rounded-[3rem]'>
      <div ref={callRef} id='calldiv' />
    </div>
  );
};

export default PageMid;

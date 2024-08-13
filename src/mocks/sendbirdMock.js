export const useSendbirdStateContext = () => ({
  config: {
    groupChannel: {
      replyType: 'NONE',
      enableReactions: true,
      enableMessageSearch: true,
      enableMention: true,
      enableVoiceMessage: true,
      enableSuggestedReplies: true,
    },
    groupChannelSettings: {
      enableMessageSearch: true,
    },
  },
  stores: {
    sdkStore: {
      sdk: {
        isCacheEnabled: true,
      },
    },
  },
});

export const useMediaQueryContext = () => ({
  isMobile: false,
});

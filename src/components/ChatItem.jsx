export default function ChatItem({ isMe, username, message }) {
  return (
    <>
      <div class="chat-message">
        <div class={`flex items-end ${isMe ? "justify-end" : ""}`}>
          <div
            class={`flex flex-col space-y-2 text-sm max-w-xs sm:max-w-xl mx-2 order-2 ${
              isMe ? "items-end order-1" : "items-start order-2"
            }`}
          >
            <div>
              <span
                class={`px-4 py-2 rounded-lg inline-block ${
                  isMe
                    ? "rounded-br-none bg-blue-600 text-white"
                    : "rounded-bl-none bg-gray-300  text-gray-600"
                }`}
              >
                {message}
              </span>
            </div>
          </div>
          <div
            class={`relative inline-flex items-center justify-center w-6 h-6 sm:w-12 sm:h-12 overflow-hidden rounded-full order-1 ${
              isMe
                ? "text-white bg-blue-600 order-2"
                : "text-white bg-gray-600 order-1"
            } `}
          >
            <span class="font-medium">{username[0]}</span>
          </div>
        </div>
      </div>
    </>
  );
}

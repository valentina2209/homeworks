
export function UserListItem({ user, actions }) {
    return (
        <div className="flex justify-between items-center py-3 border-b border-zinc-800">
            <div>
                <span className="font-bold text-white">{user.name}</span>
                <span className="text-zinc-400 ml-2">— {user.email}</span>
            </div>

            {/* ЦЕЙ БЛОК МАЄ БУТИ ТУТ */}
            <div className="flex items-center gap-2">
                {actions}
            </div>
        </div>
    )
}
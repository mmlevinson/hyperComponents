const AllowedTriggers = new Set(['click', 'hover'])
const AllowedOrientations = new Set(['horizontal', 'vertical'])

const ColorFamilies = ['slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose']
const Shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']
const HexValues = [
	['f8fafc', 'f9fafb', 'fafafa', 'fafafa', 'fafaf9', 'fef2f2', 'fff7ed', 'fffbeb', 'fefce8', 'f7fee7', 'f0fdf4', 'ecfdf5', 'f0fdfa', 'ecfeff', 'f0f9ff', 'eff6ff', 'eef2ff', 'f5f3ff', 'faf5ff', 'fdf4ff', 'fdf2f8', 'fff1f2'],
	['f1f5f9', 'f3f4f6', 'f4f4f5', 'f5f5f5', 'f5f5f4', 'fee2e2', 'ffedd5', 'fef3c7', 'fef9c3', 'ecfccb', 'dcfce7', 'd1fae5', 'ccfbf1', 'cffafe', 'e0f2fe', 'dbeafe', 'e0e7ff', 'ede9fe', 'f3e8ff', 'fae8ff', 'fce7f3', 'ffe4e6'],
	['e2e8f0', 'e5e7eb', 'e4e4e7', 'e5e5e5', 'e7e5e4', 'fecaca', 'fed7aa', 'fde68a', 'fef08a', 'd9f99d', 'bbf7d0', 'a7f3d0', '99f6e4', 'a5f3fc', 'bae6fd', 'bfdbfe', 'c7d2fe', 'ddd6fe', 'e9d5ff', 'f5d0fe', 'fbcfe8', 'fecdd3'],
	['cbd5e1', 'd1d5db', 'd4d4d8', 'd4d4d4', 'd6d3d1', 'fca5a5', 'fdba74', 'fcd34d', 'fde047', 'bef264', '86efac', '6ee7b7', '5eead4', '67e8f9', '7dd3fc', '93c5fd', 'a5b4fc', 'c4b5fd', 'd8b4fe', 'f0abfc', 'f9a8d4', 'fda4af'],
	['94a3b8', '9ca3af', 'a1a1aa', 'a3a3a3', 'a8a29e', 'f87171', 'fb923c', 'fbbf24', 'facc15', 'a3e635', '4ade80', '34d399', '2dd4bf', '22d3ee', '38bdf8', '60a5fa', '818cf8', 'a78bfa', 'c084fc', 'e879f9', 'f472b6', 'fb7185'],
	['64748b', '6b7280', '71717a', '737373', '78716c', 'ef4444', 'f97316', 'f59e0b', 'eab308', '84cc16', '22c55e', '10b981', '14b8a6', '06b6d4', '0ea5e9', '3b82f6', '6366f1', '8b5cf6', 'a855f7', 'd946ef', 'ec4899', 'f43f5e'],
	['475569', '4b5563', '52525b', '525252', '57534e', 'dc2626', 'ea580c', 'd97706', 'ca8a04', '65a30d', '16a34a', '059669', '0d9488', '0891b2', '0284c7', '2563eb', '4f46e5', '7c3aed', '9333ea', 'c026d3', 'db2777', 'e11d48'],
	['334155', '374151', '3f3f46', '404040', '44403c', 'b91c1c', 'c2410c', 'b45309', 'a16207', '4d7c0f', '15803d', '047857', '0f766e', '0e7490', '0369a1', '1d4ed8', '4338ca', '6d28d9', '7e22ce', 'a21caf', 'be185d', 'be123c'],
	['1e293b', '1f2937', '27272a', '262626', '292524', '991b1b', '9a3412', '92400e', '854d0e', '3f6212', '166534', '065f46', '115e59', '155e75', '075985', '1e40af', '3730a3', '5b21b6', '6b21a8', '86198f', '9d174d', '9f1239'],
	['0f172a', '111827', '18181b', '171717', '1c1917', '7f1d1d', '7c2d12', '78350f', '713f12', '365314', '14532d', '064e3b', '134e4a', '164e63', '0c4a6e', '1e3a8a', '312e81', '4c1d95', '581c87', '701a75', '831843', '881337'],
	['020617', '030712', '09090b', '0a0a0a', '0c0a09', '450a0a', '431407', '451a03', '422006', '1a2e05', '052e16', '022c22', '042f2e', '083344', '082f49', '172554', '1e1b4b', '2e1065', '3b0764', '4a044e', '500724', '4c0519'],
]

const DemoStyles = {
	triggerButton: 'trigger-button colorPallet appearance-none not-content select-none cursor-pointer inline-flex items-center rounded-md p-2 drop-shadow-2xl font-semibold text-md lg:text-lg bg-slate-200 hover:bg-slate-300 text-zinc-700 dark:text-zinc-300 dark:bg-indigo-600 dark:hover:bg-indigo-800 border-2 border-slate-500 dark:border-indigo-400 size-16',
	dropdownContainer: 'h-0 absolute z-10 rounded-lg drop-shadow-2xl overflow-hidden text-lg font-medium bg-white dark:bg-gray-800',
	itemsList: 'inline-block flex flex-col text-left gap-y-4 cursor-pointer py-4 font-semibold text-gray-900 dark:text-zinc-50',
	horizontalGrid: 'grid grid-rows-1 gap-2 px-4',
	verticalGrid: 'grid grid-cols-11 gap-2 px-4',
	palletColumn: 'mt-0 flex flex-col gap-y-2',
	palletItem: 'size-3 rounded-sm overflow-hidden ring-1 ring-slate-600 hover:scale-125',
	icon: 'inline-block size-8 pt-2',
}

const DemoConfig = {
	buttonId: 'dropdown-pallet-demo',
	menuId: 'menu-dropdown-pallet-demo',
	menuItemsId: 'menuItems-dropdown-pallet-demo',
	moveXY: '-200,2',
	duration: '280ms',
}

//* --------------------------------SANITIZE VALUE -------------------------------------/
/* Restrict URL params to known values and apply fallbacks.
*/
function sanitizeValue(value, allowedValues, fallbackValue) {
	if (!value) {
		return fallbackValue
	}

	return allowedValues.has(value) ? value : fallbackValue
}

//* --------------------------------FORMAT COLOR NAME -------------------------------------/
/* Convert Tailwind class fragments into display-friendly swatch titles.
*/
function formatColorName(twColor) {
	const familyAndShade = twColor.replace(/^bg-/, '')
	return familyAndShade.charAt(0).toUpperCase() + familyAndShade.slice(1)
}

//* --------------------------------BUILD SWATCH MARKUP -------------------------------------/
/* Return one swatch node wired to close the dropdown and run the demo alert.
*/
function getSwatchMarkup(family, shade, hexCode, buttonId) {
	const twColor = `bg-${family}-${shade}`
	const colorName = formatColorName(twColor)

	return `
		<span
			class="${DemoStyles.palletItem} ${twColor}"
			title="${colorName} (#${hexCode})"
			bgcolor="${twColor}"
			script="on click send hideDropdown to #{'${buttonId}'} then settle then alert('You selected ' + my @title)">
		</span>
	`
}

//* --------------------------------BUILD HORIZONTAL GRID -------------------------------------/
/* Build PalletGrid horizontal markup with color family columns.
*/
function getHorizontalGridMarkup(buttonId) {
	const columns = ColorFamilies.map((family, familyIndex) => {
		const shadesMarkup = Shades.map((shade, shadeIndex) =>
			getSwatchMarkup(family, shade, HexValues[shadeIndex][familyIndex], buttonId)
		).join('')

		return `<div class="${DemoStyles.palletColumn}">${shadesMarkup}</div>`
	}).join('')

	return `<div class="${DemoStyles.horizontalGrid}" style="grid-template-columns:repeat(22, 1fr);">${columns}</div>`
}

//* --------------------------------BUILD VERTICAL GRID -------------------------------------/
/* Build PalletGrid vertical markup with shade columns.
*/
function getVerticalGridMarkup(buttonId) {
	const columns = Shades.map((shade, shadeIndex) => {
		const colorMarkup = ColorFamilies.map((family, familyIndex) =>
			getSwatchMarkup(family, shade, HexValues[shadeIndex][familyIndex], buttonId)
		).join('')

		return `<div class="${DemoStyles.palletColumn}">${colorMarkup}</div>`
	}).join('')

	return `<div class="${DemoStyles.verticalGrid}">${columns}</div>`
}

//* --------------------------------BUILD GRID MARKUP -------------------------------------/
/* Route orientation to the correct PalletGrid variant.
*/
function getPalletGridMarkup(orientation, buttonId) {
	return orientation === 'horizontal'
		? getHorizontalGridMarkup(buttonId)
		: getVerticalGridMarkup(buttonId)
}

//* --------------------------------BUILD BUTTON SCRIPT -------------------------------------/
/* Return Hyperscript for click or hover trigger behavior.
*/
function getButtonScript(trigger) {
	const sharedScript = `
		init
			set :menuHasMouse to false
		end

		def toggleDropdown
			if my @aria-expanded is 'true' then send hideDropdown to me
			otherwise send showDropdown to me
		end

		def calcOpenHeight
			set menuHeight to 0 then set items to the children of the #{'${DemoConfig.menuId}'}
			for item in items increment the menuHeight by the item's offsetHeight end
			return menuHeight
		end

		def repositionMenu
			set offsets to (my @movexy) split by ','
			set xOffset to the offsets[0] as Int
			set yOffset to the offsets[1] as Int
			measure me then put the result.bounds into buttonLocation
			set the *left of #{'${DemoConfig.menuId}'} to (buttonLocation.left + xOffset + window.pageXOffset) px
			set the *top of #{'${DemoConfig.menuId}'} to (buttonLocation.bottom + yOffset + window.pageYOffset) px
		end

		on click from me
			toggleDropdown()
		end

		on keydown[key=='Escape'] from document
			if my @aria-expanded is 'true' send hideDropdown to me
		end

		on showDropdown from me
			repositionMenu()
			set @aria-expanded of me to 'true'
			set @aria-hidden of #{'${DemoConfig.menuId}'} to 'false'
			set the *height of #{'${DemoConfig.menuId}'} to the calcOpenHeight() px
		end

		on hideDropdown
			set @aria-expanded of me to 'false'
			set @aria-hidden of #{'${DemoConfig.menuId}'} to 'true'
			set the *height of #{'${DemoConfig.menuId}'} to 0 then settle
		end

		on menuHasMouse(value)
			set :menuHasMouse to value
		end
	`

	if (trigger === 'click') {
		return `
			${sharedScript}
			on blur send hideDropdown to me end
		`
	}

	return `
		${sharedScript}
		on mouseenter from me
			call me.focus() then send showDropdown to me
		end

		on mouseleave from me
			call me.blur()
			wait 50ms then
				if not :menuHasMouse send hideDropdown to me
			end
		end
	`
}

//* --------------------------------BUILD MENU SCRIPT -------------------------------------/
/* Return Hyperscript for the dropdown menu list based on trigger mode.
*/
function getMenuScript(trigger) {
	if (trigger === 'click') {
		return `on click or mouseleave send hideDropdown to the previous .trigger-button`
	}

	return `
		on click or mouseleave send hideDropdown to the previous .trigger-button
		on mouseenter send menuHasMouse(value:true) to the previous .trigger-button end
		on mouseleave send menuHasMouse(value:false) to the previous .trigger-button end
	`
}

//* --------------------------------BUILD DROPDOWN FRAGMENT -------------------------------------/
/* Return the complete dropdown + PalletGrid HTML fragment.
*/
function getDropdownMarkup(trigger, orientation) {
	const buttonScript = getButtonScript(trigger)
	const menuScript = getMenuScript(trigger)
	const gridMarkup = getPalletGridMarkup(orientation, DemoConfig.buttonId)

	return `
		<div class="dropdownmenu flex justify-center py-2">
			<button
				id="${DemoConfig.buttonId}"
				type="button"
				moveXY="${DemoConfig.moveXY}"
				class="${DemoStyles.triggerButton}"
				aria-haspopup="menu"
				aria-expanded="false"
				aria-controls="${DemoConfig.menuItemsId}"
				script="${buttonScript}">
				<img src="/images/tailwind_icon.svg" alt="tailwind icon" class="${DemoStyles.icon}" />
			</button>

			<div
				id="${DemoConfig.menuId}"
				aria-hidden="true"
				class="${DemoStyles.dropdownContainer}"
				style="transition: height ${DemoConfig.duration} ease-in-out">
				<ul
					id="${DemoConfig.menuItemsId}"
					role="menu"
					aria-labelledby="${DemoConfig.buttonId}"
					class="${DemoStyles.itemsList}"
					script="${menuScript}">
					${gridMarkup}
				</ul>
			</div>
		</div>
	`
}

//* --------------------------------GET DROPDOWN FRAGMENT -------------------------------------/
/* Return a fresh dropdown fragment configured by trigger/orientation query params.
*/
export const GET = async ({request}) => {
	const url = new URL(request.url)
	const trigger = sanitizeValue(url.searchParams.get('trigger'), AllowedTriggers, 'click')
	const orientation = sanitizeValue(url.searchParams.get('orientation'), AllowedOrientations, 'horizontal')
	const markup = getDropdownMarkup(trigger, orientation)

	return new Response(markup, {
		status: 200,
		headers: {
			'Content-Type': 'text/html; charset=utf-8',
		},
	})
}

